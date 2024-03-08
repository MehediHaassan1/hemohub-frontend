import axios from "axios";
import { useContext } from "react";
import { USER_CONTEXT } from "../context/AuthProviders";
import { useNavigate } from "react-router-dom";

const privetApi = axios.create({
    baseURL: "https://hemo-hub-1-server.onrender.com",
});

const usePrivetApi = () => {
    const { logOutUser } = useContext(USER_CONTEXT);
    const navigate = useNavigate();
    privetApi.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("access-token");
            config.headers.authorization = `bearer ${token}`;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    privetApi.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            const status = error.response.status;
            if (status === 401 || status === 403) {
                await logOutUser();
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );

    return privetApi;
};

export default usePrivetApi;
