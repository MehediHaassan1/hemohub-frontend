import { useContext } from "react";
import { USER_CONTEXT } from "../context/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";
import Loading from "../components/Loading";

const useUserData = () => {
    const { user } = useContext(USER_CONTEXT);
    const publicApi = usePublicApi();

    const {
        data: userData,
        isPending,
        isLoading,
    } = useQuery({
        queryKey: ["userData", user?.uid],
        queryFn: async () => {
            const userRes = await publicApi.get(`/api/v1/user/${user?.uid}`);
            return userRes.data;
        },
    });

    return { userData, isPending, isLoading };
};

export default useUserData;
