import { Link } from "react-router-dom";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
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
        const password = data.password;
        const c_password = data.c_password;
        if (password !== c_password) {
            alert("password did not matched");
            return;
        }
        console.log(data);
    };

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
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                            >
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
                                            name="firstName"
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "First Name is required",
                                                },
                                            })}
                                        />
                                        <label className="block my-2 text-sm font-bold text-red-500">
                                            {errors.firstName && (
                                                <p>
                                                    {errors.firstName.message}
                                                </p>
                                            )}
                                        </label>
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
                                            name="lastName"
                                            {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Last Name is required",
                                                },
                                            })}
                                        />
                                        <label className="block my-2 text-sm font-bold text-red-500">
                                            {errors.lastName && (
                                                <p>{errors.lastName.message}</p>
                                            )}
                                        </label>
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
                                        name="email"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required",
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message:
                                                    "Invalid email address",
                                            },
                                        })}
                                    />
                                    <label className="block my-2 text-sm font-bold text-red-500">
                                        {errors.email && (
                                            <p>{errors.email.message}</p>
                                        )}
                                    </label>
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-2 md:mr-2 md:mb-0">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="******************"
                                            name="password"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Password is required",
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "Must contain 6 characters",
                                                },
                                                validate: {
                                                    upperCase: (fieldValue) => {
                                                        return (
                                                            /[A-Z]/.test(
                                                                fieldValue
                                                            ) ||
                                                            "Add 1 uppercase"
                                                        );
                                                    },
                                                    lowerCase: (fieldValue) => {
                                                        return (
                                                            /[a-z]/.test(
                                                                fieldValue
                                                            ) ||
                                                            "Add 1 lowercase"
                                                        );
                                                    },
                                                    numberCase: (
                                                        fieldValue
                                                    ) => {
                                                        return (
                                                            /[0-9]/.test(
                                                                fieldValue
                                                            ) || "Add 1 number"
                                                        );
                                                    },
                                                },
                                            })}
                                        />
                                        <label className="block my-2 text-sm font-bold text-red-500">
                                            {errors.password && (
                                                <p>{errors.password.message}</p>
                                            )}
                                        </label>
                                    </div>
                                    <div className="md:ml-2">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="c_password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                            id="c_password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="******************"
                                            name="c_password"
                                            {...register("c_password", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Confirm Password is required",
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "Must contain 6 characters",
                                                },
                                                validate: {
                                                    upperCase: (fieldValue) => {
                                                        return (
                                                            /[A-Z]/.test(
                                                                fieldValue
                                                            ) ||
                                                            "Add 1 uppercase"
                                                        );
                                                    },
                                                    lowerCase: (fieldValue) => {
                                                        return (
                                                            /[a-z]/.test(
                                                                fieldValue
                                                            ) ||
                                                            "Add 1 lowercase"
                                                        );
                                                    },
                                                    numberCase: (
                                                        fieldValue
                                                    ) => {
                                                        return (
                                                            /[0-9]/.test(
                                                                fieldValue
                                                            ) || "Add 1 number"
                                                        );
                                                    },
                                                },
                                            })}
                                        />
                                        <label className="block my-2 text-sm font-bold text-red-500">
                                            {errors.c_password && (
                                                <p>
                                                    {errors.c_password.message}
                                                </p>
                                            )}
                                        </label>
                                    </div>
                                </div>
                                <p
                                    className="flex items-center gap-2 cursor-pointer w-fit mb-6"
                                    onClick={handleShowPassword}
                                >
                                    <input
                                        id="showPassword"
                                        type="checkbox"
                                        checked={showPassword ? true : false}
                                        className="checkbox checkbox-xs "
                                        readOnly
                                    />
                                    <span
                                        htmlFor="showPassword"
                                        className="block my-2 text-sm font-bold text-primary"
                                    >
                                        Show Password
                                    </span>
                                </p>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-primary rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
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
