import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
