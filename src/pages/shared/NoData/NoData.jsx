import React from "react";

const NoData = ({ children }) => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">No Data Found</h2>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NoData;
