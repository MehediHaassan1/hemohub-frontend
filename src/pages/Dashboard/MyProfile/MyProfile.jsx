import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import DashboardTitle from "../../shared/DashboardTitle/DashboardTitle";
// import useStateData from "../../../hooks/useStateData";
import usePublicApi from "../../../hooks/usePublicApi";

const MyProfile = () => {
    const { userData } = useUserData();
    // const { divisionData, districtData, subDistrictData } = useStateData();
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [subdistricts, setSubdistricts] = useState([]);
    const publicApi = usePublicApi();

    useEffect(() => {
        publicApi
            .get("/api/v1/divisions")
            .then((res) => setDivisions(res.data));

        publicApi
            .get("/api/v1/districts")
            .then((res) => setDistricts(res.data));

        publicApi
            .get("/api/v1/subdistricts")
            .then((res) => setSubdistricts(res.data));
    }, [publicApi]);
    const [edit, setEdit] = useState(false);

    return (
        <div>
            <DashboardTitle
                title={"My profile"}
                edit={edit}
                setEdit={setEdit}
            ></DashboardTitle>
            <div className="">
                <form>
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
                                >
                                    {divisions?.map((data) => (
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
                                >
                                    {districts?.map((data) => (
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
                                >
                                    {subdistricts?.map((data) => (
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
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold text-txt">
                                    Image
                                </span>
                            </div>
                            <input
                                type="file"
                                className={`file-input file-input-bordered w-full max-w-xs disabled:bg-transparent disabled:border-primary  disabled:text-txt ${
                                    edit ? "bg-slate-900 text-txt " : ""
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
