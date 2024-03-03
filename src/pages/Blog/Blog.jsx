import useAllBlogs from "../../hooks/useAllBlogs";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
    const { allBlogs } = useAllBlogs();
    const params = useParams();

    const blog = allBlogs?.find((blog) => blog._id === params?.id);
    const featuredBlogs = allBlogs?.filter((blog) => blog._id !== params.id);

    return (
        <div className="max-w-screen-xl mx-auto">
            <main className="mt-12">
                <div className="flex gap-2 lg:gap-8 mb-16 relative">
                    <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-8/12 relative rounded block">
                        <img
                            src={blog?.contentThumbnailImage}
                            className="rounded-md object-cover w-full"
                        />
                        <div className="text-accent flex gap-4 mt-3">
                            <p>{blog?.postingTime}</p>
                            <p>{blog?.postingDate}</p>
                        </div>
                        <h1 className="text-gray-500 text-4xl font-bold mt-2 mb-2 leading-tight">
                            {blog?.contentTitle}
                        </h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: blog?.content,
                            }}
                        ></div>
                    </div>

                    <div className="w-full md:w-4/12 h-screen sticky right-0 top-0 hidden md:block">
                        {featuredBlogs?.map((data) => (
                            <div
                                key={data?._id}
                                className="rounded-md overflow-hidden w-full flex flex-col md:flex-row mb-10"
                            >
                                <img
                                    src={data.contentThumbnailImage}
                                    className="lg:h-32 m-4 md:m-0 w-2/4 object-cover"
                                />
                                <div className="bg-white px-4 w-2/4">
                                    <div className="md:mt-0 text-gray-800 font-semibold lg:text-xl mb-2 link link-hover">
                                        <Link to={`/blogs/${data._id}`}>
                                            {data.contentTitle}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Blog;
