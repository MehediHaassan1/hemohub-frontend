import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaLinkedinIn, FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa6";

const Volunteers = () => {
    return (
        <div className="relative">
            <div
                style={{
                    background:
                        "url(https://templates.bwlthemes.com/blood_donation/v_2/images/team_feat_bg.jpg)",
                }}
                className="min-h-screen"
            >
                <div className="min-w-screen-xl mx-auto">
                    <div>
                        <div className="py-10">
                            <SectionTitle
                                title={"OUR VOLUNTEERS"}
                            ></SectionTitle>
                        </div>
                        <h1 className="text-3xl lg:text-6xl text-center font-bold">
                            The volunteers who give their time and talents help
                            to fulfill our mission.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto relative">
                <div className="flex flex-col items-center justify-center space-y-5 md:space-y-0 md:flex-row md:absolute md:-bottom-60 md:gap-5 lg:justify-evenly md:w-full">
                    <div className="text-center ">
                        <img
                            src="https://images.unsplash.com/photo-1530505580493-3fa88046af67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D"
                            alt=""
                            className="h-96"
                        />
                        <h1 className="text-black text-3xl mt-3">
                            ALEXANDER GARY
                        </h1>
                        <h2 className="text-slate-500 text-xl uppercase my-3">
                            Co-Founder
                        </h2>
                        <div className="flex items-center justify-evenly w-full text-center">
                            <FaLinkedinIn className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaGoogle className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaTwitter className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaFacebook className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                        </div>
                    </div>

                    <div className="text-center ">
                        <img
                            src="https://images.unsplash.com/photo-1618088129969-bcb0c051985e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D"
                            alt=""
                            className="h-96"
                        />
                        <h1 className="text-black text-3xl mt-3">
                            JOHN ABRAHAM
                        </h1>
                        <h2 className="text-slate-500 text-xl uppercase my-3">
                            FOUNDER
                        </h2>
                        <div className="flex items-center justify-evenly w-full text-center">
                            <FaLinkedinIn className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaGoogle className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaTwitter className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaFacebook className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                        </div>
                    </div>

                    <div className="text-center ">
                        <img
                            src="https://images.unsplash.com/photo-1615899486509-84e2c782b0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D"
                            alt=""
                            className="h-96"
                        />
                        <h1 className="text-black text-3xl mt-3">
                            MELISSA MUNOZ
                        </h1>
                        <h2 className="text-slate-500 text-xl uppercase my-3">
                            manager
                        </h2>
                        <div className="flex items-center justify-evenly w-full text-center">
                            <FaLinkedinIn className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaGoogle className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaTwitter className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                            <FaFacebook className="w-6 h-6 text-accent/80 hover:text-accent cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;
