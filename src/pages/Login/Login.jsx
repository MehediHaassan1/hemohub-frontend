import { Link } from "react-router-dom";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";

const Login = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-xl mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold text-primary">
                                    Login
                                </h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Email address"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Password"
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <button className="bg-accent text-white rounded px-2 py-1">
                                            login
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-primary">
                                <p className="md:text-lg">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/register-account"
                                        className="link link-hover"
                                    >
                                        Registration
                                    </Link>
                                </p>
                                <div className="divider">or</div>
                                <div className="w-full">
                                    <button className="border w-full py-2 border-accent rounded">
                                        <GoogleLogin></GoogleLogin>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
