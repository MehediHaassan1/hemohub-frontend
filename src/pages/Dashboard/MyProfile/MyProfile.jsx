import { useState } from "react";
import useUserData from "../../../hooks/useUserData";
import DashboardTitle from "../../shared/DashboardTitle/DashboardTitle";
import useStateData from "../../../hooks/useStateData";
import { useForm } from "react-hook-form";
import usePublicApi from "../../../hooks/usePublicApi";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const MyProfile = () => {
    const { userData, refetch } = useUserData();
    const { divisionData, districtData, subDistrictData } = useStateData();
    const [edit, setEdit] = useState(false);
    const publicApi = usePublicApi();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        let image;
        if (data.image) {
            const imageData = { image: data.image[0] };
            const imageHostingRes = await publicApi.post(
                imageHostingURL,
                imageData,
                {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            );
            image = imageHostingRes.data.data.display_url;
        } else {
            image = userData?.image;
        }

        const updatedInfo = {
            name: data.name,
            email: data.email,
            division: data.division,
            district: data.district,
            subdistrict: data.subdistrict,
            bloodGroup: data.bloodGroup,
            image,
        };
        const updateUserInfoRes = await publicApi.patch(
            `/api/v1/update-user-info/${userData._id}`,
            updatedInfo
        );
        if (updateUserInfoRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated successful",
                showConfirmButton: false,
                timer: 2000,
            });
            refetch();
            setEdit(false);
        }
    };

    return (
        <div>
            <DashboardTitle
                title={"My profile"}
                edit={edit}
                setEdit={setEdit}
            ></DashboardTitle>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary  
                                        ${
                                            edit
                                                ? "bg-slate-900"
                                                : "bg-transparent"
                                        }
                                        `}
                                    defaultValue={userData?.name}
                                    readOnly={edit ? false : true}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Email
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
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                    })}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-2 lg:gap-5">
                        <div className="md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Blood Group
                                    </span>
                                </div>
                                <select
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary disabled:bg-transparent disabled:border-primary  disabled:text-txt ${
                                            edit ? "bg-slate-900 text-txt" : ""
                                        }
                                        `}
                                    defaultValue={userData?.bloodGroup}
                                    disabled={edit ? false : true}
                                    {...register("bloodGroup", {
                                        required: {
                                            value: true,
                                            message: "Blood Group is required",
                                        },
                                    })}
                                >
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
                                        Division
                                    </span>
                                </div>
                                <select
                                    defaultValue={userData?.division}
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary disabled:bg-transparent disabled:border-primary  disabled:text-txt ${
                                            edit ? "bg-slate-900 text-txt" : ""
                                        }
                                        `}
                                    disabled={edit ? false : true}
                                    {...register("division", {
                                        required: {
                                            value: true,
                                            message: "division is required",
                                        },
                                    })}
                                >
                                    {divisionData?.map((data) => (
                                        <option
                                            key={data?._id}
                                            className="bg-slate-800"
                                            value={data?.name}
                                        >
                                            {data?.name}
                                        </option>
                                    ))}
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
                                        text-lg border border-primary disabled:bg-transparent disabled:border-primary  disabled:text-txt ${
                                            edit ? "bg-slate-900 text-txt" : ""
                                        }
                                        `}
                                    defaultValue={userData?.district}
                                    disabled={edit ? false : true}
                                    {...register("district", {
                                        required: {
                                            value: true,
                                            message: "District is required",
                                        },
                                    })}
                                >
                                    {districtData?.map((data) => (
                                        <option
                                            key={data?._id}
                                            className="bg-slate-800"
                                            value={data?.name}
                                        >
                                            {data?.name}
                                        </option>
                                    ))}
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
                                    defaultValue={userData?.subdistrict}
                                    className={`input w-full text-txt focus:border-primary focus:outline-none 
                                        text-lg border border-primary disabled:bg-transparent disabled:border-primary  disabled:text-txt ${
                                            edit ? "bg-slate-900 text-txt" : ""
                                        }
                                        `}
                                    disabled={edit ? false : true}
                                    {...register("subdistrict", {
                                        required: {
                                            value: true,
                                            message: "Subdistrict is required",
                                        },
                                    })}
                                >
                                    {subDistrictData?.map((data) => (
                                        <option
                                            key={data._id}
                                            className="bg-slate-800"
                                            value={data.name}
                                        >
                                            {data.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold text-txt">
                                        Image
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    className={`file-input file-input-bordered w-full disabled:bg-transparent disabled:border-primary disabled:text-txt ${
                                        edit ? "bg-slate-900 text-txt " : ""
                                    }`}
                                    disabled={edit ? false : true}
                                    {...register("image")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold text-txt"></span>
                            </div>
                            <input
                                type="submit"
                                value="Update"
                                className={`file-input file-input-bordered w-full disabled:bg-accent disabled:border-primary disabled:text-black disabled:tracking-widest text-black font-bold  ${
                                    edit
                                        ? "bg-accent/80 tracking-widest cursor-pointer"
                                        : ""
                                }`}
                                disabled={edit ? false : true}
                            />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
