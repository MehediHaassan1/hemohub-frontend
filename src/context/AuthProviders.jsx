import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";
import usePublicApi from "../hooks/usePublicApi";

export const USER_CONTEXT = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const publicApi = usePublicApi();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const resetUserPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userMail = { email: currentUser.email };
                const verifyUserRes = await publicApi.post("/jwt", userMail);
                const token = verifyUserRes.data.token;
                if (token) {
                    localStorage.setItem("access-token", token);
                    setLoading(false);
                }
            } else {
                setUser(null);
                localStorage.removeItem("access-token");
                setLoading(true);
            }
        });

        return () => {
            return subscribe();
        };
    }, [publicApi]);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        loginWithGoogle,
        resetUserPassword,
    };
    return (
        <USER_CONTEXT.Provider value={authInfo}>
            {children}
        </USER_CONTEXT.Provider>
    );
};

export default AuthProviders;
