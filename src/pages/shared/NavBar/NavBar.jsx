import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { USER_CONTEXT } from "../../../context/AuthProviders";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOutUser } = useContext(USER_CONTEXT);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout successful",
                    showConfirmButton: false,
                    timer: 2000,
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="text-lg">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/donation-request" className="text-lg">
                    Donation Request
                </NavLink>
            </li>
            <li>
                <NavLink to="/blog" className="text-lg">
                    Blog
                </NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/login" className="text-lg">
                            Login
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink to="/dashboard" className="text-lg">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/donate" className="text-lg">
                            Donate
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );
    return (
        <div className="drawer h-20 sticky top-0 z-50">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar p-0">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 mx-2">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>

                    {user && (
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    {user?.displayURl ? (
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.displayURl}
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center p-1">
                                            <FaUserCircle className="w-8 h-8 bg-primary rounded-full"></FaUserCircle>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-bkg rounded-box w-52"
                            >
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/settings">Settings</Link>
                                </li>

                                <li onClick={handleLogOut}>
                                    <Link>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="drawer-side z-50">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-56 min-h-full bg-bkg">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
