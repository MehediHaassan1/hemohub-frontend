import { Link } from "react-router-dom";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        // const password = data.password;
        // const c_password = data.c_password;
        // if (password !== c_password) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Password did not matched!",
        //     });
        //     return;
        // }
        console.log(data);
    };

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
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="divide-y divide-gray-200"
                            >
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Email address"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Email is required",
                                                },
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message:
                                                        "Invalid email address",
                                                },
                                            })}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Email Address
                                        </label>
                                        <label className="block my-2 text-sm font-bold text-red-500">
                                            {errors.email && (
                                                <p>{errors.email.message}</p>
                                            )}
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Password"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Password is required",
                                                },
                                            })}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                        <label className="block my-2 text-sm font-bold text-red-500">
                                            {errors.password && (
                                                <p>{errors.password.message}</p>
                                            )}
                                        </label>
                                    </div>
                                    <p
                                        className="flex items-center gap-2 cursor-pointer w-fit mb-2"
                                        onClick={handleShowPassword}
                                    >
                                        <input
                                            id="showPassword"
                                            type="checkbox"
                                            checked={
                                                showPassword ? true : false
                                            }
                                            className="checkbox checkbox-xs "
                                            readOnly
                                        />
                                        <span
                                            htmlFor="showPassword"
                                            className="block text-sm font-bold text-primary"
                                        >
                                            Show Password
                                        </span>
                                    </p>
                                    <div className="relative">
                                        <button className="bg-accent text-white rounded px-2 py-1">
                                            login
                                        </button>
                                    </div>
                                </div>
                            </form>
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
