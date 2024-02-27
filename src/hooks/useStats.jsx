import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";
import Loading from "../components/Loading";

const useStats = () => {
    const privetApi = usePrivetApi();
    const {
        data: stats,
        isPending,
        isLoading,
    } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const statsRes = await privetApi.get("/api/v1/stats");
            return statsRes.data;
        },
    });

    if (isPending || isLoading) return <Loading></Loading>;

    return { stats };
};

export default useStats;
