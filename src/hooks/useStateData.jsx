import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";
import Loading from "../components/Loading";

const useStateData = () => {
    const publicApi = usePublicApi();

    // division query
    const { data: divisionData, isLoading: divisionIsLoading } = useQuery({
        queryKey: ["divisionData"],
        queryFn: async () => {
            const divisionRes = await publicApi.get("/api/v1/divisions");
            return divisionRes.data;
        },
    });

    // district query
    const { data: districtData, isLoading: districtIsLoading } = useQuery({
        queryKey: ["districtData "],
        queryFn: async () => {
            const districtRes = await publicApi.get("/api/v1/districts");
            return districtRes.data;
        },
    });

    // district query
    const { data: subDistrictData, isLoading: subdistrictIsLoading } = useQuery(
        {
            queryKey: ["upazilaData "],
            queryFn: async () => {
                const subDistrictRes = await publicApi.get(
                    "/api/v1/subdistricts"
                );
                return subDistrictRes.data;
            },
        }
    );

    if (divisionIsLoading || districtIsLoading || subdistrictIsLoading)
        return <Loading></Loading>;

    return { divisionData, districtData, subDistrictData };
};

export default useStateData;
