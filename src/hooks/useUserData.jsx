import { useContext } from "react";
import { USER_CONTEXT } from "../context/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";
import Loading from "../components/Loading";

const useUserData = () => {
    const { user, loading } = useContext(USER_CONTEXT);
    const privetApi = usePrivetApi();

    const {
        data: userData,
        isPending,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["userData", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const userRes = await privetApi.get(`/api/v1/user/${user?.email}`);
            return userRes.data;
        },
    });

    return { userData, isPending, isLoading, refetch };
};

export default useUserData;
