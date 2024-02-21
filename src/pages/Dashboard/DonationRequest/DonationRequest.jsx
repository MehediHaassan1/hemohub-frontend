import { useState } from "react";
import useUserData from "../../../hooks/useUserData";
import DashboardTitle from "../../shared/DashboardTitle/DashboardTitle";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DonationRequest = () => {
    const { userData } = useUserData();
    const [edit, setEdit] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = (data) => {
        console.log(data);
        const date = moment(startDate).format("DD-MM-YYYY");
        console.log(date);
    };

    return (
        <div>
            <DashboardTitle
                title={"Donation Request"}
                edit={edit}
                setEdit={setEdit}
            ></DashboardTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2">
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
                        <div className="md:w-1/2">
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
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Recipient Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className={`input w-full text-txt focus:border-primary
                                     focus:outline-none text-lg border border-primary 
                                     bg-transparent focus:bg-slate-900`}
                                    {...register("recipientName")}
                                />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Blood Group
                                    </span>
                                </div>
                                <select
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary bg-transparent focus:bg-slate-900`}
                                    defaultValue="Pick One"
                                    {...register("bloodGroup")}
                                >
                                    <option
                                        className="bg-slate-800"
                                        value="Pick One"
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
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        District
                                    </span>
                                </div>
                                <select
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary bg-transparent focus:bg-slate-900`}
                                    defaultValue="Pick One"
                                    {...register("district")}
                                >
                                    <option
                                        className="bg-slate-800"
                                        value="Pick One"
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
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Sub District
                                    </span>
                                </div>
                                <select
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary bg-transparent focus:bg-slate-900`}
                                    defaultValue="Pick One"
                                    {...register("subDistrict")}
                                >
                                    <option
                                        className="bg-slate-800"
                                        value="Pick One"
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
                                    className={`textarea h-12  w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary bg-transparent focus:bg-slate-900`}
                                    placeholder="Type here"
                                    {...register("address")}
                                ></textarea>
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
                                    className={`textarea h-12 w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary bg-transparent focus:bg-slate-900`}
                                    placeholder="Type here"
                                    {...register("hospitalName")}
                                ></textarea>
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
                                    className="w-full text-txt focus:border-primary focus:outline-none 
                                    text-lg border border-primary bg-transparent focus:bg-slate-900 h-12 rounded py-4 px-3"
                                />
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
                                    className="w-full text-txt focus:border-primary focus:outline-none 
                                    text-lg border border-primary bg-transparent focus:bg-slate-900 h-12 rounded py-4 px-3"
                                    {...register("donationTime")}
                                ></input>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold text-txt">
                                    Message
                                </span>
                            </div>
                            <textarea
                                className={`textarea w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary bg-transparent focus:bg-slate-900`}
                                placeholder="Type here"
                                {...register("message")}
                            ></textarea>
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Request"
                            className="bg-primary w-full mt-4 rounded py-3 text-lg tracking-widest cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonationRequest;
