import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const useAllBlogs = (status) => {
    const publicApi = usePublicApi();

    const { data: allBlogs, refetch } = useQuery({
        queryKey: ["allBlogs", status],
        queryFn: async () => {
            const allBlogRes = await publicApi.get(`/api/v1/blogs/${status}`);
            return allBlogRes.data;
        },
    });

    return { allBlogs, refetch };
};

export default useAllBlogs;
