import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const usePublicBlogs = () => {
    const publicApi = usePublicApi();
    const { data: allBlogs, } = useQuery({
        queryKey: ["allBlogs"],
        queryFn: async () => {
            const allBlogRes = await publicApi.get(`/api/v1/blogs`);
            return allBlogRes.data;
        },
    });

    return { allBlogs };
};

export default usePublicBlogs;
