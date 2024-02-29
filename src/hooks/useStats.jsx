import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";
import Loading from "../components/Loading";

const useStats = () => {
    const privetApi = usePrivetApi();
    const {
        data: stats,
        isLoading,
    } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const statsRes = await privetApi.get("/api/v1/stats");
            return statsRes.data;
        },
    });

    return { stats };
};

export default useStats;
