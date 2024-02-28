import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";
import useUserData from "./useUserData";
import Loading from "../components/Loading";

const useAdmin = () => {
    const privetApi = usePrivetApi();
    const { userData } = useUserData();

    const {
        data: isAdmin,
        isPending,
        isLoading,
    } = useQuery({
        queryKey: ["user/admin", userData?.email],
        queryFn: async () => {
            const isAdminRes = await privetApi.get(
                `/api/v1/admin/${userData?.email}`
            );
            return isAdminRes?.data?.admin;
        },
    });

    if (isPending || isLoading) return <Loading></Loading>;

    return { isAdmin };
};

export default useAdmin;
