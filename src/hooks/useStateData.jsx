import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const useStateData = () => {
    const publicApi = usePublicApi();

    // division query
    const { data: divisionData } = useQuery({
        queryKey: ["divisionData"],
        queryFn: async () => {
            const divisionRes = await publicApi.get("/api/v1/divisions");
            return divisionRes.data;
        },
    });

    // district query
    const { data: districtData} = useQuery({
        queryKey: ["districtData "],
        queryFn: async () => {
            const districtRes = await publicApi.get("/api/v1/districts");
            return districtRes.data;
        },
    });

    // district query
    const { data: subDistrictData} = useQuery(
        {
            queryKey: ["subdistricts "],
            queryFn: async () => {
                const subDistrictRes = await publicApi.get(
                    "/api/v1/subdistricts"
                );
                return subDistrictRes.data;
            },
        }
    );

    return { divisionData, districtData, subDistrictData };
};

export default useStateData;
