import { FaHome, FaUserAlt } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import { TbGitPullRequest } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

const Dashboard = () => {
    const { userData } = useUserData();
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-5">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 min-h-screen px-0">
                    <div className="md:col-span-4 lg:col-span-3 bg-primary p-4 lg:p-10 rounded-md text-center min-h-screen text-black">
                        {userData?.image ? (
                            <div className="avatar">
                                <div className="w-32 rounded-full">
                                    <img
                                        src={userData?.image}
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-32">
                                    <span className="text-5xl uppercase">
                                        {userData?.name?.slice(0, 1)}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="my-3">
                            <h2 className="text-xl capitalize text-txt">
                                {userData?.name}
                            </h2>
                            <h2 className="text-md text-txt">
                                HHID : {userData?.uid?.slice(0, 6)}
                            </h2>
                        </div>
                        <div className="my-5 bg-primary space-y-4">
                            <NavLink
                                className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                to="my-profile"
                            >
                                <FaUserAlt className="w-5 h-5 text-accent"></FaUserAlt>{" "}
                                My Profile
                            </NavLink>
                            {userData?.role === "donor" && (
                                <>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="create-donation-request"
                                    >
                                        <VscGitPullRequestCreate className="w-5 h-5 text-accent"></VscGitPullRequestCreate>{" "}
                                        Create Request
                                    </NavLink>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="my-donation-requests"
                                    >
                                        <TbGitPullRequest className="w-5 h-5 text-accent"></TbGitPullRequest>{" "}
                                        My Requests
                                    </NavLink>
                                </>
                            )}
                            {userData?.role === "admin" && (
                                <>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="all-users"
                                    >
                                        <FaUsers className="w-5 h-5 text-accent"></FaUsers>
                                        All Users
                                    </NavLink>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="all-blood-donation-request"
                                    >
                                        <TbGitPullRequest className="w-5 h-5 text-accent"></TbGitPullRequest>
                                        All Requests
                                    </NavLink>
                                </>
                            )}
                            <div className="divider"></div>
                            <NavLink
                                className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                to="/"
                            >
                                <FaHome className="w-5 h-5 text-accent"></FaHome>
                                Home
                            </NavLink>
                        </div>
                    </div>
                    <div className="text-white md:col-span-8 lg:col-span-9 bg-slate-700 p-4 lg:p-10 rounded-md">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
