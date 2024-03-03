import { useEffect, useState } from "react";
import useAllBlogs from "../../hooks/useAllBlogs";
import { Link } from "react-router-dom";

const Blogs = () => {
    const { allBlogs } = useAllBlogs();
    const [publishedBlog, setPublishedBlog] = useState([]);

    useEffect(() => {
        if (allBlogs?.length > 0) {
            const filteredBlogs = allBlogs?.filter(
                (blog) => blog.status === "published"
            );
            setPublishedBlog(filteredBlogs);
        }
    }, [allBlogs]);

    const triangleStyle = {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "0 20px 20px 0",
        borderColor: "transparent #1a202c transparent transparent",
    };
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-wrap lg:-mx-4">
                {publishedBlog?.map((data) => (
                    <div
                        key={data._id}
                        className="w-full max-w-full my-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
                    >
                        <img
                            src={data.contentThumbnailImage}
                            alt="Card img"
                            className="object-cover object-center w-full h-48"
                        />
                        <div className="flex flex-grow">
                            <div
                                className="triangle"
                                style={triangleStyle}
                            ></div>
                            <div className="flex flex-col justify-between px-4 py-6">
                                <div>
                                    <Link
                                        to="/blogs"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-accent"
                                    >
                                        {data.contentTitle}
                                    </Link>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                data.content.slice(0, 200) +
                                                "...",
                                        }}
                                    ></div>
                                    <div className="text-xs flex gap-4 mt-3">
                                        <p>{data.postingTime}</p>
                                        <p>{data.postingDate}</p>
                                    </div>
                                </div>
                                <div>
                                    <Link
                                        to={`/blogs/${data._id}`}
                                        className="inline-block pb-1 mt-2 text-base font-black text-accent uppercase border-b border-transparent hover:border-accent"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
