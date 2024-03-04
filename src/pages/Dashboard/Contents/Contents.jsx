import { Link, Outlet, useLocation } from "react-router-dom";
import useAllBlogs from "../../../hooks/useAllBlogs";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";
import { useState } from "react";
import useAdmin from "../../../hooks/useAdmin";

const Contents = () => {
    const { pathname } = useLocation();
    const [filterBlogs, setFilterBlogs] = useState("default");
    const { allBlogs, refetch } = useAllBlogs(filterBlogs);
    const privetApi = usePrivetApi();
    const { isAdmin } = useAdmin();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deletedBlogRes = await privetApi.delete(
                    `/api/v1/blogs/${id}`
                );
                if (deletedBlogRes.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Post has been deleted.",
                        icon: "success",
                    });
                    refetch();
                }
            }
        });
    };

    const handleUpdateBlogStatus = async (id, data) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to ${data} the blog`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${data} it!`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const status = { status: data };
                const statusUpdateRes = await privetApi.patch(
                    `/api/v1/blogs/${id}`,
                    status
                );
                if (statusUpdateRes.data.modifiedCount > 0) {
                    Swal.fire({
                        title: `${data}`,
                        text: `Blog has been ${data}`,
                        icon: "success",
                    });
                    refetch();
                }
            }
        });
    };

    const handleStatusChange = (e) => {
        const filteredData = e.target.value;
        setFilterBlogs(filteredData);
    };

    return (
        <div>
            {pathname === "/dashboard/content-management" && (
                <>
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
                    <div className="flex items-center justify-between">
                        <h1 className="md:text-2xl">All Blogs</h1>
                        <div>
                            <select
                                onChange={handleStatusChange}
                                className="select select-border border-primary focus:outline-none focus:border-primary bg-transparent"
                                defaultValue="default"
                            >
                                <option
                                    className="bg-slate-900"
                                    value="default"
                                >
                                    Default
                                </option>
                                <option className="bg-slate-900" value="draft">
                                    Draft
                                </option>
                                <option
                                    className="bg-slate-900"
                                    value="published"
                                >
                                    Published
                                </option>
                            </select>
                        </div>
                    </div>
                </>
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
                                {isAdmin?.admin && <th>Action</th>}
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
                                        {data.status === "draft" ? (
                                            <button
                                                disabled={!isAdmin?.admin}
                                                onClick={() =>
                                                    handleUpdateBlogStatus(
                                                        data._id,
                                                        "published"
                                                    )
                                                }
                                                className="bg-slate-900 rounded py-1 px-3"
                                            >
                                                Unpublished
                                            </button>
                                        ) : (
                                            <button
                                                disabled={!isAdmin?.admin}
                                                onClick={() =>
                                                    handleUpdateBlogStatus(
                                                        data._id,
                                                        "draft"
                                                    )
                                                }
                                                className="bg-slate-900 rounded py-1 px-3"
                                            >
                                                Published
                                            </button>
                                        )}
                                    </td>
                                    {isAdmin?.admin && (
                                        <td className="">
                                            <div className="flex items-center justify-center">
                                                <button
                                                    onClick={() =>
                                                        handleDelete(data._id)
                                                    }
                                                >
                                                    <FaTrash className="w-4 h-4 text-red-400"></FaTrash>
                                                </button>
                                            </div>
                                        </td>
                                    )}
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
