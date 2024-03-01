import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { USER_CONTEXT } from "../context/AuthProviders";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { isAdmin, isLoading } = useAdmin();
    const { user, loading } = useContext(USER_CONTEXT);

    const location = useLocation();

    if (loading || isLoading) return <Loading></Loading>;
    if ((user && isAdmin?.admin) || (user && isAdmin?.volunteer))
        return children;
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
