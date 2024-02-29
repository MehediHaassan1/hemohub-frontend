import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";
import useUserData from "./useUserData";
import { useContext } from "react";
import { USER_CONTEXT } from "../context/AuthProviders";

const useAdmin = () => {
    const privetApi = usePrivetApi();
    const { userData } = useUserData();
    const { loading } = useContext(USER_CONTEXT);
    const { data: isAdmin, isLoading } = useQuery({
        queryKey: ["user/admin", userData?.email],
        enabled: !!userData && !loading,
        queryFn: async () => {
            const isAdminRes = await privetApi.get(
                `/api/v1/admin/${userData?.email}`
            );
            return isAdminRes?.data?.admin;
        },
    });
    return { isAdmin, isLoading };
};

export default useAdmin;
