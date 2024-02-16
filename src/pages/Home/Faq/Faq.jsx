import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
    const faqs = [
        {
            id: 1,
            title: "Who can donate blood?",
            description:
                "Generally, individuals who are in good health, weigh at least 110 pounds, and are aged 17 years or older (16 with parental consent in some areas) may be eligible to donate blood. Specific eligibility criteria may vary depending on factors such as recent travel, medical history, and medications. It's important to check with your local blood donation center for their specific requirements.",
        },
        {
            id: 2,
            title: "How often can I donate blood?",
            description:
                "In most cases, you can donate whole blood every 56 days (or eight weeks). However, the interval between donations may vary depending on the type of donation (e.g., whole blood, platelets, plasma) and your health status. Donors should follow the guidelines provided by their local blood donation center.",
        },
        {
            id: 3,
            title: "How is donated blood used?",
            description:
                "Donated blood is used to help patients who are undergoing surgeries, experiencing trauma, receiving treatment for cancer, or have certain medical conditions that require blood transfusions. Blood donations are also used to manufacture life-saving blood products such as platelets, plasma, and red blood cells.",
        },
        {
            id: 4,
            title: "How can I find a blood donation center near me?",
            description:
                "You can find a local blood donation center by visiting the website of a reputable blood donation organization or by using online search tools provided by organizations like the American Red Cross. These tools allow you to search for donation centers based on your location.",
        },
        {
            id: 5,
            title: "What happens during the blood donation process?",
            description:
                "The blood donation process typically involves registration, a brief health screening, the donation itself, and post-donation refreshments. During the donation, a small needle is used to draw blood from a vein in your arm. The process usually takes about 10-15 minutes, and donors are monitored for a short period afterward to ensure their well-being.",
        },
        {
            id: 6,
            title: "How is donated blood matched with recipients?",
            description:
                "Donated blood is tested for blood type (A, B, AB, or O) and screened for infectious diseases such as HIV, hepatitis, and syphilis. Once tested and deemed safe for transfusion, the blood is stored and distributed to hospitals based on their needs and the compatibility of the blood with the recipient's blood type.",
        },
        {
            id: 7,
            title: "Can I donate blood if I have certain medical conditions or medications?",
            description:
                "Certain medical conditions or medications may affect your eligibility to donate blood. It's important to discuss any medical concerns or medications you are taking with the staff at the blood donation center during the pre-donation screening process. They will provide guidance on whether you are eligible to donate based on your individual circumstances.",
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle
                title={"faq"}
                subtitle={"WHAT YOU NEED TO KNOW"}
            ></SectionTitle>
            <div className="max-w-4xl mx-auto">
                {faqs.map((faq) => (
                    <div key={faq.id} className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-3"
                            // checked="checked"
                        />
                        <div className="collapse-title text-2xl font-medium">
                            {faq.title}
                        </div>
                        <div className="collapse-content">
                            <p>{faq.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
