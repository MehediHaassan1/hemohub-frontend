import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa6";
import { Parallax } from "react-parallax";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Volunteers = () => {
    const volunteersData = [
        {
            _id: 1,
            name: "John Abraham",
            position: "co-founder",
            image: "https://images.unsplash.com/photo-1536243298747-ea8874136d64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBtYW58ZW58MHwxfDB8fHww",
        },
        {
            _id: 2,
            name: "Luca",
            position: "founder",
            image: "https://images.unsplash.com/photo-1619603364937-8d7af41ef206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D",
        },
        {
            _id: 3,
            name: "Stephen Rog",
            position: "manager",
            image: "https://images.unsplash.com/photo-1622262918009-6a39cd1fb49d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D",
        },
    ];
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            strength={-100}
            className="min-h-screen flex items-center justify-center "
            bgImage="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1lbiUyMGhhdmluZyUyMGZ1bnxlbnwwfDB8MHx8fDA%3D"
        >
            <SectionTitle title={"volunteers"}></SectionTitle>
            <div className="my-10 max-w-2xl mx-auto text-center font-bold  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
                <p className="text-4xl">
                    The volunteers who give their time and talents help to
                    fulfill our mission.
                </p>
            </div>
            <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
                {volunteersData.map((data) => (
                    <div key={data._id} className="card glass rounded">
                        <figure>
                            <img
                                src={data.image}
                                alt={data.name}
                                className="h-80 w-full object-cover object-top"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{data.name}</h2>
                            <p className="text-lg uppercase text-secondary font-semibold">
                                {data.position}
                            </p>
                            <div className="flex items-center justify-between">
                                <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-primary duration-300"></FaLinkedin>
                                <FaTwitter className="w-6 h-6 cursor-pointer hover:text-primary duration-300"></FaTwitter>
                                <FaInstagram className="w-6 h-6 cursor-pointer hover:text-primary duration-300"></FaInstagram>
                                <FaFacebook className="w-6 h-6 cursor-pointer hover:text-primary duration-300"></FaFacebook>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Parallax>
    );
};

export default Volunteers;
