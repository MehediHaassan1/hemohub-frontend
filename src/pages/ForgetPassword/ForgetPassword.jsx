import { useContext } from "react";
import { Link } from "react-router-dom";
import { USER_CONTEXT } from "../../context/AuthProviders";
import { useForm } from "react-hook-form";
import usePublicApi from "../../hooks/usePublicApi";
import Swal from "sweetalert2";

const ForgetPassword = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { resetUserPassword } = useContext(USER_CONTEXT);
    const publicApi = usePublicApi();

    const onSubmit = async (data) => {
        const email = data?.email;
        const findingUser = await publicApi.get(
            `/api/v1/reset-password/${email}`
        );
        if (!findingUser.data?.user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User not valid!",
            });
        } else {
            resetUserPassword(email)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Please check your email",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    reset();
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${errorMessage}`,
                    });
                });
        }
    };

    return (
        <div>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded shadow shadow-slate-300">
                <h1 className="text-3xl md:text-4xl font-medium text-primary">
                    Reset password
                </h1>
                <p className="text-slate-500 mt-2">
                    Fill up the form to reset the password
                </p>

                <form
                    action=""
                    className="my-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col space-y-5">
                        <div>
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
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            <label className="block my-2 text-sm font-bold text-red-500">
                                {errors.email && <p>{errors.email.message}</p>}
                            </label>
                        </div>

                        <button className="w-full py-3 font-medium text-white bg-secondary hover:bg-primary rounded duration-300  hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                />
                            </svg>

                            <span>Reset password</span>
                        </button>
                        <p className="text-center text-slate-500">
                            Not registered yet?{" "}
                            <Link
                                to="/register-account"
                                className="text-primary font-medium inline-flex space-x-1 items-center"
                            >
                                <span>Register now </span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
