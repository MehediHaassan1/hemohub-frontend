import useAllUsers from "../../../hooks/useAllUsers";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

const AllUsers = () => {
    const { allUsers, refetch } = useAllUsers();
    console.log(allUsers);
    return (
        <div>
            <h1 className="pb-5 border-b border-dashed text-3xl text-center">
                All Users
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers?.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    {user?.image ? (
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={user?.image}
                                                    alt={user?.name}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral text-neutral-content mask mask-squircle w-12 h-12">
                                                <span className="text-3xl">
                                                    {user?.name.slice(0, 1)[0]}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </td>
                                <td>{user?.email}</td>
                                <td>{user?.name}</td>
                                <td>{user?.status}</td>
                                {/* <td className="text-center">
                                    <button>
                                        <FaEllipsisVertical />
                                    </button>
                                </td> */}
                                <td>
                                    <div className="w-fit text-right">
                                        <Menu
                                            as="div"
                                            className="relative inline-block text-left"
                                        >
                                            <div>
                                                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                                    <FaEllipsisVertical
                                                        className="h-5 w-5 text-violet-200 hover:text-violet-100"
                                                        aria-hidden="true"
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="fixed z-10  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                    <div className="px-1 py-1 ">
                                                        {user?.status ===
                                                        "active" ? (
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <button
                                                                        className={`${
                                                                            active
                                                                                ? "bg-violet-500 text-white"
                                                                                : "text-gray-900"
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                       Blocked  
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        ) : (
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <button
                                                                        className={`${
                                                                            active
                                                                                ? "bg-violet-500 text-white"
                                                                                : "text-gray-900"
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                       Active
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        )}

                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    className={`${
                                                                        active
                                                                            ? "bg-violet-500 text-white"
                                                                            : "text-gray-900"
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                >
                                                                    Make
                                                                    Volunteer
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    className={`${
                                                                        active
                                                                            ? "bg-violet-500 text-white"
                                                                            : "text-gray-900"
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                >
                                                                    Make Admin
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
