import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";

const useAllBlogs = (status) => {
    const privetApi = usePrivetApi();

    const { data: allBlogs, refetch } = useQuery({
        queryKey: ["allBlogs", status],
        queryFn: async () => {
            const allBlogRes = await privetApi.get(`/api/v1/blogs/${status}`);
            return allBlogRes.data;
        },
    });

    return { allBlogs, refetch };
};

export default useAllBlogs;
