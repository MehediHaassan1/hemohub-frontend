import { useState } from "react";
import useUserData from "../../../hooks/useUserData";
import DashboardTitle from "../../shared/DashboardTitle/DashboardTitle";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";
import { Helmet } from "react-helmet-async";

const DonationRequest = () => {
    const { userData } = useUserData();
    const [edit, setEdit] = useState(false);
    const privetApi = usePrivetApi();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const onSubmit = async (data) => {
        if (userData?.status === "blocked") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Blocked user can't make request",
            });
            return;
        }
        if (data.bloodGroup === "Pick one") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select a blood group.",
            });
            return;
        }

        if (data.district === "Pick one") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select a district.",
            });
            return;
        }
        if (data.subDistrict === "Pick one") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select a sub district.",
            });
            return;
        }
        const date = moment(startDate).format("DD-MM-YYYY");

        const donationInfo = { ...data, donationDate: date, status: "Pending" };
        const donationReqRes = await privetApi.post(
            "/api/v1/create-donation-request",
            donationInfo
        );
        if (donationReqRes.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Donation request successful",
                showConfirmButton: false,
                timer: 2000,
            });
            reset();
            setEdit(false);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Create Request | HemoHub</title>
            </Helmet>
            <DashboardTitle
                title={"Donation Request"}
                edit={edit}
                setEdit={setEdit}
            ></DashboardTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2 mb-2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Requester Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className={`input w-full text-txt focus:border-primary
                                     focus:outline-none text-lg border border-primary 
                                     bg-transparent`}
                                    defaultValue={userData?.name}
                                    readOnly
                                    {...register("requesterName")}
                                />
                            </label>
                        </div>
                        <div className="md:w-1/2 mb-2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Requester Email
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary bg-transparent
                                        `}
                                    defaultValue={userData?.email}
                                    readOnly
                                    {...register("requesterEmail")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2 mb-2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Recipient Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    readOnly={edit ? false : true}
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                    text-lg border border-primary text-white 
                                    ${
                                        edit
                                            ? "bg-slate-900"
                                            : " bg-transparent cursor-not-allowed"
                                    }
                                    `}
                                    {...register("recipientName", {
                                        required: {
                                            value: true,
                                            message:
                                                "Recipient Name is required",
                                        },
                                    })}
                                />
                                <div className="label">
                                    {errors.recipientName && (
                                        <span className="label-text-alt text-red-400 text-base">
                                            {errors.recipientName.message}
                                        </span>
                                    )}
                                </div>
                            </label>
                        </div>
                        <div className="md:w-1/2 mb-2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Blood Group
                                    </span>
                                </div>
                                <select
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                       text-lg border border-primary disabled:bg-transparent disabled:border-primary  disabled:text-txt ${
                                           edit
                                               ? "bg-slate-900 text-txt"
                                               : "cursor-"
                                       }
                                       `}
                                    disabled={edit ? false : true}
                                    defaultValue="Pick one"
                                    {...register("bloodGroup")}
                                >
                                    <option
                                        className="bg-slate-800"
                                        value="Pick one"
                                        disabled
                                    >
                                        Pick One
                                    </option>
                                    <option className="bg-slate-800" value="A+">
                                        A+
                                    </option>
                                    <option className="bg-slate-800" value="A-">
                                        A-
                                    </option>
                                    <option className="bg-slate-800" value="B+">
                                        B+
                                    </option>
                                    <option className="bg-slate-800" value="B-">
                                        B-
                                    </option>
                                    <option className="bg-slate-800" value="O+">
                                        O+
                                    </option>
                                    <option className="bg-slate-800" value="O-">
                                        O-
                                    </option>
                                    <option
                                        className="bg-slate-800"
                                        value="AB+"
                                    >
                                        AB+
                                    </option>
                                    <option
                                        className="bg-slate-800"
                                        value="AB-"
                                    >
                                        AB-
                                    </option>
                                </select>
                                <div className="label">
                                    <span className="label-text-alt text-red-400 text-base"></span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2 mb-2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        District
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className={`input w-full text-txt focus:border-primary
                                     focus:outline-none text-lg border border-primary 
                                     bg-transparent cursor-not-allowed`}
                                    defaultValue={userData?.district}
                                    readOnly
                                    {...register("district")}
                                />
                            </label>
                            <div className="label">
                                <span className="label-text-alt text-red-400 text-base"></span>
                            </div>
                        </div>
                        <div className="md:w-1/2 mb-2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Sub District
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className={`input w-full text-txt focus:border-primary
                                     focus:outline-none text-lg border border-primary 
                                     bg-transparent cursor-not-allowed`}
                                    defaultValue={userData?.subdistrict}
                                    readOnly
                                    {...register("subdistrict")}
                                />
                                <div className="label">
                                    <span className="label-text-alt text-red-400 text-base"></span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Address
                                    </span>
                                </div>
                                <textarea
                                    readOnly={edit ? false : true}
                                    className={`textarea h-12 w-full text-txt focus:border-primary focus:outline-none 
                                    text-lg border border-primary text-white 
                                    ${
                                        edit
                                            ? "bg-slate-900"
                                            : " bg-transparent cursor-not-allowed"
                                    }
                                    `}
                                    placeholder="Type here"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "Address is required",
                                        },
                                    })}
                                ></textarea>
                                <div className="label">
                                    {errors.address && (
                                        <p className="text-red-400 label-text-alt text-base">
                                            {errors.address.message}
                                        </p>
                                    )}
                                </div>
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Hospital Name
                                    </span>
                                </div>
                                <textarea
                                    readOnly={edit ? false : true}
                                    className={`textarea h-12 w-full text-txt focus:border-primary focus:outline-none 
                                    text-lg border border-primary text-white 
                                    ${
                                        edit
                                            ? "bg-slate-900"
                                            : " bg-transparent cursor-not-allowed"
                                    }
                                    `}
                                    placeholder="Type here"
                                    {...register("hospitalName", {
                                        required: {
                                            value: true,
                                            message:
                                                "Hospital Name is required",
                                        },
                                    })}
                                ></textarea>
                                <div className="label">
                                    {errors.hospitalName && (
                                        <p className="text-red-400 label-text-alt text-base">
                                            {errors.hospitalName.message}
                                        </p>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Donation date
                                    </span>
                                </div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={new Date()}
                                    dateFormat="dd/MM/yyyy"
                                    disabled={edit ? false : true}
                                    className={`w-full text-txt focus:border-primary focus:outline-none 
                                    text-lg border border-primary h-12 rounded py-4 px-3 ${
                                        edit
                                            ? "bg-slate-900"
                                            : "bg-transparent cursor-not-allowed"
                                    }`}
                                />
                                <div className="label">
                                    <span className="label-text-alt text-red-400 text-base"></span>
                                </div>
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Donation time
                                    </span>
                                </div>
                                <input
                                    type="time"
                                    placeholder="type here"
                                    disabled={edit ? false : true}
                                    className={`w-full text-txt focus:border-primary focus:outline-none 
                                    text-lg border border-primary  h-12 rounded py-4 px-3 ${
                                        edit
                                            ? "bg-slate-900 cursor-pointer"
                                            : "bg-transparent cursor-not-allowed"
                                    }`}
                                    {...register("donationTime", {
                                        required: {
                                            value: true,
                                            message:
                                                "Donation time is required",
                                        },
                                    })}
                                ></input>
                                <div className="label">
                                    {errors.donationTime && (
                                        <p className="text-red-400 label-text-alt text-base">
                                            {errors.donationTime.message}
                                        </p>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold text-txt">
                                    Message
                                </span>
                            </div>
                            <textarea
                                readOnly={edit ? false : true}
                                className={`textarea w-full text-txt focus:border-primary focus:outline-none 
                                 text-lg border border-primary text-white 
                                 ${
                                     edit
                                         ? "bg-slate-900"
                                         : " bg-transparent cursor-not-allowed"
                                 }
                                 `}
                                placeholder="Type here"
                                {...register("message", {
                                    required: {
                                        value: true,
                                        message: "Message is required",
                                    },
                                })}
                            ></textarea>
                            <div className="label">
                                {errors.message && (
                                    <p className="text-red-400 label-text-alt text-base">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                        </label>
                    </div>
                    <div>
                        <input
                            disabled={edit ? false : true}
                            type="submit"
                            value="Request"
                            className={`bg-primary w-full mt-4 rounded py-3 text-lg tracking-widest ${
                                edit ? "cursor-pointer" : "cursor-not-allowed"
                            }`}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonationRequest;
