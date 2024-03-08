import axios from "axios";

const publicApi = axios.create({
    baseURL: "https://hemo-hub-1-server.onrender.com",
});

const usePublicApi = () => {
    return publicApi;
};

export default usePublicApi;