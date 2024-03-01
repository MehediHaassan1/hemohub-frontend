import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";

const useAllUsers = (status) => {
    const privetApi = usePrivetApi();

    const {
        data: allUsers,
        isPending,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allUsers", status],
        queryFn: async () => {
            const allUserRes = await privetApi.get(
                `/api/v1/all-users?status=${status}`
            );
            return allUserRes.data;
        },
    });

    return { allUsers, isPending, isLoading, refetch };
};

export default useAllUsers;
