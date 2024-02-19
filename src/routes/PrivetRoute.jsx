import { useContext } from "react";
import { USER_CONTEXT } from "../context/AuthProviders";
import Loading from "../components/Loading";
import { Navigate } from "react-router-dom";
import useUserData from "../hooks/useUserData";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(USER_CONTEXT);
    const { isPending } = useUserData();
    if (loading || isPending) {
        return <Loading></Loading>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;
