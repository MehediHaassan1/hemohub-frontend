import { useState } from "react";
import useStateData from "../../hooks/useStateData";
import Swal from "sweetalert2";
import usePublicApi from "../../hooks/usePublicApi";

const SearchDonor = () => {
    const { stateData } = useStateData();
    const publicApi = usePublicApi();

    const [subDistrict, setSubDistrict] = useState([]);
    const [userSelectedDistrict, setUserSelectedDistrict] = useState("");
    const [userSelectedSubDistrict, setUserSelectedSubDistrict] = useState("");

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

    const handleSearchDonor = async (e) => {
        e.preventDefault();
        const bloodGroup = e.target.bloodGroup.value;
        const district = userSelectedDistrict;
        const subdistrict = userSelectedSubDistrict;
        if (bloodGroup === "Blood Group") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Blood Group not selected",
            });
            return;
        } else if (district === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "District not selected",
            });
            return;
        } else if (subdistrict === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sub District not selected",
            });
            return;
        }
        console.log(bloodGroup, district, subdistrict);
        const searchData = await publicApi.get(
            `/api/v1/search-donors?bloodGroup=${bloodGroup}&district=${district}&subdistrict=${subdistrict}`
        );
        console.log(searchData.data);
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl md:text-4xl text-center">
                Search Your Donor
            </h1>
            <div className="">
                <form
                    className="space-y-2 md:flex items-center gap-2 md:space-y-0 my-4"
                    onSubmit={handleSearchDonor}
                >
                    <label className="form-control w-full max-w-xs">
                        <select
                            className="select select-bordered bg-slate-800 rounded"
                            defaultValue="Blood Group"
                            name="bloodGroup"
                        >
                            <option disabled className="">
                                Blood Group
                            </option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <select
                            className="select select-bordered bg-slate-800 rounded"
                            defaultValue="District"
                            onChange={handleDistrictChange}
                            name="district"
                        >
                            <option disabled>District</option>
                            {stateData?.district?.map((data) => (
                                <option key={data._id} value={data.name}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <select
                            className="select select-bordered bg-slate-800 rounded"
                            defaultValue="Sub District"
                            onChange={handleSubDistrictChange}
                            name="subdistrict"
                        >
                            <option disabled>Sub District</option>
                            {subDistrict?.map((data) => (
                                <option key={data._id} value={data.name}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <input
                        type="submit"
                        value="Search"
                        className="w-full max-w-xs bg-slate-800 py-3 rounded cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default SearchDonor;
