import { useState } from "react";
import useUserData from "../../../hooks/useUserData";
import DashboardTitle from "../../shared/DashboardTitle/DashboardTitle";
import useStateData from "../../../hooks/useStateData";
import { useForm } from "react-hook-form";
import usePublicApi from "../../../hooks/usePublicApi";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const MyProfile = () => {
    const { userData, refetch } = useUserData();
    const { stateData } = useStateData();
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const privetApi = usePrivetApi();
    const publicApi = usePublicApi();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [district, setDistrict] = useState([]);
    const [subDistrict, setSubDistrict] = useState([]);
    const [userSelectedDivision, setUserSelectedDivision] = useState("");
    const [userSelectedDistrict, setUserSelectedDistrict] = useState("");
    const [userSelectedSubDistrict, setUserSelectedSubDistrict] = useState("");

    const handleDivisionChange = (e) => {
        const division = stateData?.division;
        const district = stateData?.district;
        const selectedDivision = e.target.value;
        setUserSelectedDivision(selectedDivision);
        const divisionDetails = division.find(
            (data) => data.name === selectedDivision
        );
        const districtList = district?.filter(
            (data) => data.division_id === divisionDetails?.id
        );
        setDistrict(districtList);
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setUserSelectedDistrict(selectedDistrict);
        const district = stateData?.district;
        const subDistrict = stateData?.subDistrict;
        const districtDetails = district.find(
            (data) => data.name === selectedDistrict
        );
        const subDistrictList = subDistrict?.filter(
            (data) => data.district_id === districtDetails?.id
        );
        setSubDistrict(subDistrictList);
    };

    const handleSubDistrictChange = (e) => {
        const selectedSubDistrict = e.target.value;
        setUserSelectedSubDistrict(selectedSubDistrict);
    };

    const onSubmit = async (data) => {
        if (
            userSelectedDivision === "" ||
            userSelectedDistrict === "" ||
            userSelectedSubDistrict === ""
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please modified data in a proper way",
            });
            return;
        }
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
            division: userSelectedDivision,
            district: userSelectedDistrict,
            subdistrict: userSelectedSubDistrict,
            bloodGroup: data.bloodGroup,
            image,
        };
        const updateUserInfoRes = await privetApi.patch(
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
            navigate("/dashboard");
        }
    };

    return (
        <div>
            <Helmet>
                <title>My Profile | HemoHub</title>
            </Helmet>
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
                                    {edit ? (
                                        <>
                                            <option
                                                className="bg-slate-800"
                                                value="Pick one"
                                                disabled
                                            >
                                                Pick one
                                            </option>
                                            <option
                                                className="bg-slate-800"
                                                value="A+"
                                            >
                                                A+
                                            </option>
                                            <option
                                                className="bg-slate-800"
                                                value="A-"
                                            >
                                                A-
                                            </option>
                                            <option
                                                className="bg-slate-800"
                                                value="B+"
                                            >
                                                B+
                                            </option>
                                            <option
                                                className="bg-slate-800"
                                                value="B-"
                                            >
                                                B-
                                            </option>
                                            <option
                                                className="bg-slate-800"
                                                value="O+"
                                            >
                                                O+
                                            </option>
                                            <option
                                                className="bg-slate-800"
                                                value="O-"
                                            >
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
                                        </>
                                    ) : (
                                        <option
                                            value={userData?.bloodGroup}
                                            className="bg-slate-800"
                                        >
                                            {userData?.bloodGroup}
                                        </option>
                                    )}
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
                                    onChange={handleDivisionChange}
                                >
                                    {edit ? (
                                        <>
                                            <option
                                                value="Pick one"
                                                className="bg-slate-800"
                                                disabled
                                            >
                                                Pick one
                                            </option>
                                            {stateData?.division?.map(
                                                (data) => (
                                                    <option
                                                        key={data?._id}
                                                        className="bg-slate-800"
                                                        value={data?.name}
                                                    >
                                                        {data?.name}
                                                    </option>
                                                )
                                            )}
                                        </>
                                    ) : (
                                        <option
                                            value={userData?.division}
                                            className="bg-slate-800"
                                        >
                                            {userData?.division}
                                        </option>
                                    )}
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
                                    onChange={handleDistrictChange}
                                >
                                    {edit ? (
                                        <>
                                            <option
                                                value="Pick one"
                                                className="bg-slate-800"
                                                disabled
                                            >
                                                Pick one
                                            </option>
                                            {district?.map((data) => (
                                                <option
                                                    key={data?._id}
                                                    className="bg-slate-800"
                                                    value={data?.name}
                                                >
                                                    {data?.name}
                                                </option>
                                            ))}
                                        </>
                                    ) : (
                                        <option
                                            value={userData?.district}
                                            className="bg-slate-800"
                                        >
                                            {userData?.district}
                                        </option>
                                    )}
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
                                    onChange={handleSubDistrictChange}
                                >
                                    {edit ? (
                                        <>
                                            <option
                                                value="Pick one"
                                                className="bg-slate-800"
                                                disabled
                                            >
                                                Pick one
                                            </option>
                                            {subDistrict?.map((data) => (
                                                <option
                                                    key={data._id}
                                                    className="bg-slate-800"
                                                    value={data.name}
                                                >
                                                    {data.name}
                                                </option>
                                            ))}
                                        </>
                                    ) : (
                                        <option
                                            className="bg-slate-800"
                                            value={userData?.subdistrict}
                                        >
                                            {userData?.subdistrict}
                                        </option>
                                    )}
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
