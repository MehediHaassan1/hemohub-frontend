import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";
import Loading from "../components/Loading";

const useAllUsers = () => {
    const privetApi = usePrivetApi();

    const {
        data: allUsers,
        isPending,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const allUserRes = await privetApi.get("/api/v1/all-users");
            return allUserRes.data;
        },
    });

    return { allUsers, isPending, isLoading, refetch };
};

export default useAllUsers;
