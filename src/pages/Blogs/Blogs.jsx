import useAllBlogs from "../../hooks/useAllBlogs";

const Blogs = () => {
    const { allBlogs } = useAllBlogs();
    const triangleStyle = {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "0 20px 20px 0",
        borderColor: "transparent #1a202c transparent transparent",
    };
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1>Blogs</h1>

            <div className="flex flex-wrap -mx-4">
                {allBlogs?.map((data) => (
                    <div
                        key={data._id}
                        className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
                    >
                        <img
                            src="https://source.unsplash.com/Lki74Jj7H-U/400x300"
                            alt="Card img"
                            className="object-cover object-center w-full h-48"
                        />
                        <div className="flex flex-grow">
                            <div
                                className="triangle"
                                style={triangleStyle}
                            ></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                                <div>
                                    <a
                                        href="#"
                                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                                    >
                                        Reliable Schemas
                                    </a>
                                    <a
                                        href="#"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                                    >
                                        What Zombies Can Teach You About Food
                                    </a>
                                    <p className="mb-4">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Nulla delectus
                                        corporis commodi aperiam, amet
                                        cupiditate?
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                                    >
                                        Read More
                                    </a>
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
