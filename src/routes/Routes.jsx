import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import DonationRequest from "../pages/Dashboard/DonationRequest/DonationRequest";
import MyDonation from "../pages/Dashboard/MyDonation/MyDonation";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllRequests from "../pages/Dashboard/AllRequests/AllRequests";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register-account",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "dashboard",
        element: (
            <PrivetRoute>
                <DashboardLayout></DashboardLayout>
            </PrivetRoute>
        ),
        children: [
            {
                index: true,
                element: <Dashboard></Dashboard>,
            },
            {
                path: "my-profile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "create-donation-request",
                element: <DonationRequest></DonationRequest>,
            },
            {
                path: "my-donation-requests",
                element: <MyDonation></MyDonation>,
            },
            {
                path: "all-users",
                element: <AllUsers></AllUsers>,
            },
            {
                path: "all-blood-donation-request",
                element: <AllRequests></AllRequests>,
            },
        ],
    },
]);

export default router;
