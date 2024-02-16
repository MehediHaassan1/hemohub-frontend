import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;
