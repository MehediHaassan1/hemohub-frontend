import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";

export const USER_CONTEXT = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => {
            return subscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        loginWithGoogle,
    };
    return (
        <USER_CONTEXT.Provider value={authInfo}>
            {children}
        </USER_CONTEXT.Provider>
    );
};

export default AuthProviders;
