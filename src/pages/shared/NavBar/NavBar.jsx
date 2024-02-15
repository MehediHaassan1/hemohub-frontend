import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const NavBar = () => {
    const login = false;
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
            {!login && (
                <>
                    <li>
                        <NavLink to="/login" className="text-lg">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration" className="text-lg">
                            Registration
                        </NavLink>
                    </li>
                </>
            )}
            {login && (
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
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
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
                    <div className="flex-1 px-2 mx-2">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
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
