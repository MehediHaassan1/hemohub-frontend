import { Link } from "react-router-dom";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";

const Register = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{
                                backgroundImage:
                                    " url(https://images.unsplash.com/photo-1639772823849-6efbd173043c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfDF8MHx8fDA%3D)",
                            }}
                        ></div>

                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center text-accent">
                                Create an Account!
                            </h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="firstName"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="lastName"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                        <p className="text-xs italic text-red-500">
                                            Please choose a password.
                                        </p>
                                    </div>
                                    <div className="md:ml-2">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="c_password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-primary rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <div className="text-center">
                                    <div className="divider">or</div>
                                    <button className="border border-primary rounded py-2 w-full">
                                        <GoogleLogin></GoogleLogin>
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <p
                                        className="inline-block text- text-primary align-baseline"
                                        href="#"
                                    >
                                        Already have an account?{" "}
                                        <Link
                                            to="/login"
                                            className="link link-hover"
                                        >
                                            Login!
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
