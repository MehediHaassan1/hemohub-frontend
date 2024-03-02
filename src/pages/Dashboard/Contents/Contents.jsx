import { Link, Outlet, useLocation } from "react-router-dom";
import useAllBlogs from "../../../hooks/useAllBlogs";

const Contents = () => {
    const { pathname } = useLocation();
    const { allBlogs } = useAllBlogs();
    console.log(allBlogs);
    return (
        <div>
            {pathname === "/dashboard/content-management" && (
                <div className="pb-5 mb-5 border-b border-dashed flex items-center justify-between">
                    <h1 className="md:text-3xl">Content Management</h1>
                    <Link
                        to="create-content"
                        className="bg-slate-800 py-1 px-3 rounded"
                    >
                        <button className="md:text-lg tracking-widest text-accent">
                            Create Content
                        </button>
                    </Link>
                </div>
            )}

            {pathname === "/dashboard/content-management/create-content" && (
                <Outlet></Outlet>
            )}

            {pathname === "/dashboard/content-management" && (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-center text-txt">
                                <th></th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allBlogs?.map((data, index) => (
                                <tr
                                    key={data._id}
                                    className="hover:bg-slate-800 text-center"
                                >
                                    <th>{index + 1}</th>
                                    <td className="text-start">
                                        {data.contentTitle}
                                    </td>
                                    <td>
                                        {data.status === "draft" ||
                                        data.status === "unpublished" ? (
                                            <button className="bg-slate-900 rounded py-1 px-3">
                                                Published
                                            </button>
                                        ) : (
                                            <button className="bg-slate-900 rounded py-1 px-3">
                                                Unpublished
                                            </button>
                                        )}
                                    </td>
                                    <td className="space-x-2">
                                        <button>Edit</button>

                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Contents;
