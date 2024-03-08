import { Link } from "react-router-dom";
import usePublicReqs from "../../hooks/usePublicReqs";

const AllDonationRequest = () => {
    const { allPublicReqs } = usePublicReqs();

    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <h1 className="md:text-3xl text-center">Donation Requests</h1>
            </div>
            <div>
                {allPublicReqs?.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-txt">
                                    <th></th>
                                    <th>Requester Name</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allPublicReqs?.map((data, index) => (
                                    <tr key={data._id}>
                                        <th>{index + 1}</th>
                                        <td>{data.requesterName}</td>
                                        <td>
                                            {data.address +
                                                ", " +
                                                data.subdistrict}
                                        </td>
                                        <td>{data.donationDate}</td>
                                        <td>{data.donationTime}</td>
                                        <td>
                                            <Link to={`details/${data._id}`}>
                                                <button className="bg-secondary rounded py-1 px-3 font-semibold">
                                                    View
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center">Nothing here</div>
                )}
            </div>
        </div>
    );
};

export default AllDonationRequest;
