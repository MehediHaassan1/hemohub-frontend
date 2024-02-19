import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { FaRegCalendar, FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

const Campaigns = () => {
    const campaignsData = [
        {
            campaignId: "1",
            title: "Emergency Blood Drive",
            description:
                "Urgent need for all blood types due to recent accidents and surgeries. Your donation can be the lifeline for someone in critical condition. Join us at City Hospital on February 20th to make a difference and save lives!",
            location: "City Hospital",
            date: "2024-02-20",
            image: "https://images.unsplash.com/photo-1582719202047-76d3432ee323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxibG9vZHxlbnwwfDF8MHx8fDA%3D ",
            time: "11:00 AM - 7:00 PM",
        },
        {
            campaignId: "2",
            title: "Blood Donation Day",
            description:
                "Be a hero in your community. Join us on Mar 5th at the Community Center. Every donation helps local hospitals and patients in need. Together, let's make a difference!",
            location: "Community Center",
            date: "2024-03-05",
            image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxibG9vZHxlbnwwfDF8MHx8fDA%3D",
            time: "11:00 AM - 7:00 PM",
        },
        {
            campaignId: "3",
            title: "Blood Drive Competition",
            description:
                "Calling all students! Save lives and win prizes. Join us on Mar 15th at the Local High School. Your donation matters!",
            location: "Local High School",
            date: "2024-03-15",
            image: "https://images.unsplash.com/photo-1582560475135-72433678395b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJsb29kfGVufDB8MXwwfHx8MA%3D%3D",
            time: "11:00 AM - 7:00 PM",
        },
        {
            campaignId: "4",
            title: "Blood Donation Challenge",
            description:
                "Engage in friendly competition with coworkers. Help your company win most donations. Join us on Mar 30th at the Corporate Office. Be a part of something bigger!",
            location: "Corporate Office",
            date: "2024-03-30",
            image: "https://images.unsplash.com/photo-1631815589170-38f2132410e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJsb29kJTIwZG9uYXRlfGVufDB8MXwwfHx8MA%3D%3D",
            time: "11:00 AM - 7:00 PM",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle title={"our campaigns"}></SectionTitle>
            <div className="md:flex justify-between gap-10 my-10">
                <div className="md:w-1/2 flex items-center justify-center  ">
                    <div className="max-w-md">
                        <p className="text-2xl md:text-3xl">
                            All over the world we have arranged total sixty
                            thousands donation campaign and visit thousands of
                            other venues on various occasions.
                        </p>
                        <button className="bg-accent/80 hover:bg-accent duration-300 text-lg py-2 px-4 font-semibold mt-10 rounded">All Campaigns</button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {campaignsData.map((data) => (
                            <SwiperSlide key={data.campaignId}>
                                <div className="md:flex gap-5 items-center">
                                    <div className="md:w-1/2">
                                        <img
                                            src={data.image}
                                            alt=""
                                            className="h-96 w-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <p className="flex gap-3 items-center text-accent">
                                            <FaRegCalendar /> {data.date}
                                        </p>
                                        <h2 className="text-2xl my-5">
                                            {data.title}
                                        </h2>
                                        <p className="lg:text-lg">
                                            {data.description}
                                        </p>
                                        <div className="flex items-center gap-5 mt-5">
                                            <p className="text-xs flex items-center gap-2">
                                                <MdWatchLater className="text-accent" />
                                                {data.time}
                                            </p>
                                            <p className="text-xs flex items-center gap-2">
                                                <FaLocationDot className="text-accent" />
                                                {data.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Campaigns;
