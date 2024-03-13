
import { useState } from "react";
import Contents from "./Contents";
import Donation from "./Donation";
import ShowPieChart from "./PieChart"; // Import PieChart component

const CombinedData = () => {
    const [combinedData, setCombinedData] = useState([]);

    // Callback function to receive data from Contents component
    const handleContentsData = (contentsData) => {
        // Update combined data with contentsData
        setCombinedData(prevData => [...prevData, ...contentsData]);
    };

    // Callback function to receive data from Donation component
    const handleDonationData = (donationData) => {
        // Update combined data with donationData
        setCombinedData(prevData => [...prevData, ...donationData]);
    };

    return (
        <div>
            {/* Contents component */}
            <Contents onData={handleContentsData} />

            {/* Donation component */}
            <Donation onData={handleDonationData} />

            {/* PieChart component with combined data */}
            <ShowPieChart data={combinedData} />
        </div>
    );
};

export default CombinedData;
