import { MdBloodtype } from "react-icons/md";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl uppercase">{title}</h2>
            <div className="divider md:w-1/6 mx-auto divider-neutral">
                <div>
                    <MdBloodtype className="text-red-400 w-8 h-8" />
                </div>
            </div>
            <h3 className="lg:text-lg">{subtitle}</h3>
        </div>
    );
};

export default SectionTitle;
