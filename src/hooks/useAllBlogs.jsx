import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";

const useAllBlogs = () => {
    const privetApi = usePrivetApi();

    const { data: allBlogs, refetch } = useQuery({
        queryKey: ["allBlogs"],
        queryFn: async () => {
            const allBlogRes = await privetApi.get(`/api/v1/blogs`);
            return allBlogRes.data;
        },
    });

    return { allBlogs, refetch };
};

export default useAllBlogs;
