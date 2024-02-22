import { useContext } from "react";
import { USER_CONTEXT } from "../context/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";
import usePrivetApi from "./usePrivetApi";

const useUserData = () => {
    const { user } = useContext(USER_CONTEXT);
    const publicApi = usePublicApi();
    const privetApi = usePrivetApi();

    const {
        data: userData,
        isPending,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["userData", user?.uid],
        queryFn: async () => {
            const userRes = await privetApi.get(`/api/v1/user/${user?.uid}`);
            return userRes.data;
        },
    });

    return { userData, isPending, isLoading, refetch };
};

export default useUserData;
