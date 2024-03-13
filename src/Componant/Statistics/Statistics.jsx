import { Link, useLoaderData } from "react-router-dom";
import PieCharts from "./PieCharts";
import { useEffect, useState } from "react";
import { getStoredDonation } from "../../localstorage";

const Statistics = () => {
    const allData = useLoaderData();
    // console.log(allData);

    const [totalDonation, setTotalDonation] = useState([]);
    // console.log('all data price', allDataDonate)
    const [yourDonation, setYourDonation] = useState([]);
    // console.log('Paid Donate', payDonate);






    //for all Donation 
    useEffect(() => {
        const allDatas = allData.map(allData => allData.donate_price);
        const totalSum = allDatas.reduce((acc, currentValue) => acc + currentValue, 0);
        setTotalDonation(totalSum);
    }, [allData])

    // for paid donation. 
    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (allData.length) {
            const donated = allData.filter(donation => storedDonationIds.includes(donation.id))

            const payDonated = donated.map(donation => donation.donate_price);
            const totalSum = payDonated.reduce((acc, currentValue) => acc + currentValue, 0);
            setYourDonation(totalSum);
        }
    }, [allData])

    return (
        <div className="max-w-6xl md:mx-auto   w-full h-full flex flex-col justify-center items-center">
            <PieCharts totalDonation={totalDonation} yourDonation={yourDonation} />
            
            <div className="mt-8">
                <p ><span className="text-blue-500 underline"><Link to={'/'}>Donate </Link></span> According to your Ability</p>
            </div>


        </div>
    );
};

export default Statistics;