import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const useAllBlogs = () => {
    const publicApi = usePublicApi();

    const { data: allBlogs, refetch } = useQuery({
        queryKey: ["allBlogs"],
        queryFn: async () => {
            const allBlogRes = await publicApi.get(`/api/v1/blogs`);
            return allBlogRes.data;
        },
    });

    return { allBlogs, refetch };
};

export default useAllBlogs;
