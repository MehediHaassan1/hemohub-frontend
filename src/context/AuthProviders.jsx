import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.confiq";

export const USER_CONTEXT = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = { user, loading, createUser };
    return (
        <USER_CONTEXT.Provider value={authInfo}>
            {children}
        </USER_CONTEXT.Provider>
    );
};

export default AuthProviders;
