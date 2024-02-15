import { FaSmile, FaUsers } from "react-icons/fa";
import { BiSolidDonateBlood } from "react-icons/bi";
import { RiAwardFill } from "react-icons/ri";

const Data = () => {
    return (
        <div
            className="min-h-96 flex items-center justify-center my-20 bg-fixed object-cover"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1638272467190-4ff6f773315c?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white w-56 h-56 text-center flex items-center justify-center">
                    <div>
                        <FaSmile className="h-16 w-16 mx-auto text-accent" />
                        <h1 className="text-5xl font-extrabold text-black my-3">
                            1215
                        </h1>
                        <h1 className="text-2xl text-black uppercase">
                            success smile
                        </h1>
                    </div>
                </div>

                <div className="bg-white w-56 h-56 text-center flex items-center justify-center">
                    <div>
                        <BiSolidDonateBlood className="h-16 w-16 mx-auto text-accent" />
                        <h1 className="text-5xl font-extrabold text-black my-3">
                            835
                        </h1>
                        <h1 className="text-2xl text-black uppercase">
                            HAPPY DONORS
                        </h1>
                    </div>
                </div>

                <div className="bg-white w-56 h-56 text-center flex items-center justify-center">
                    <div>
                        <FaUsers className="h-16 w-16 mx-auto text-accent" />
                        <h1 className="text-5xl font-extrabold text-black my-3">
                            1568
                        </h1>
                        <h1 className="text-2xl text-black uppercase">
                            HAPPY RECIPIENT
                        </h1>
                    </div>
                </div>

                <div className="bg-white w-56 h-56 text-center flex items-center justify-center">
                    <div>
                        <RiAwardFill className="h-16 w-16 mx-auto text-accent" />
                        <h1 className="text-5xl font-extrabold text-black my-3">
                            11
                        </h1>
                        <h1 className="text-2xl text-black uppercase">
                            TOTAL AWARDS
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;
