import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Process = () => {
    const processData = [
        {
            _id: 1,
            title: "Registration",
            slogan: "Arrive at the donation center and complete a brief registration form providing basic information such as name, age, and contact details.",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVnaXN0cmF0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
        },
        {
            _id: 2,
            title: "Health Screening",
            slogan: "Undergo a confidential health screening to assess eligibility. This includes a mini-physical to check vital signs like blood pressure, pulse, and hemoglobin levels.",
            img: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymxvb2QlMjBzY3JlZW5pbmd8ZW58MHwwfDB8fHww",
        },
        {
            _id: 3,
            title: "Donation",
            slogan: "Once cleared, proceed to the donation area where a trained staff member will sanitize the donation site, usually the arm, and insert a sterile needle to collect blood.",
            img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9uYXRlJTIwYmxvb2R8ZW58MHwwfDB8fHww",
        },
        {
            _id: 4,
            title: "Recovery",
            slogan: "After donation, relax in a designated recovery area and enjoy refreshments to replenish fluids and snacks to boost energy levels. Rest for about 10-15 minutes before resuming normal activities.",
            img: "https://images.unsplash.com/photo-1564844536306-2dca5256d9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxqdWljZXxlbnwwfDB8MHx8fDA%3D",
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle
                title={"DONATION PROCESS"}
                subtitle={
                    "The donation process from the time you arrive center until the time you leave"
                }
            ></SectionTitle>
            <div className="flex items-center justify-center my-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {processData.map((data) => (
                        <div key={data._id}>
                            <div className="relative">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="h-60 w-82"
                                />
                                <p className="absolute bottom-0 p-4 bg-accent bg-opacity-10 text-3xl font-bold">
                                    {data._id}
                                </p>
                            </div>
                            <h2 className="text-3xl my-3">{data.title}</h2>
                            <p className="h-44 lg:text-lg">{data.slogan}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
