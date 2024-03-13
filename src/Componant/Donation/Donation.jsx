import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../localstorage";
import { useEffect, useState } from "react";
import Donate from "./Donate";

const Donation = () => {

    const donations = useLoaderData(); 
  
    
    const [donat, setDonat] = useState([]); 
    const [displyDonat, setDisplyDonat] = useState(4);
    const [hidden, setHidden] = useState(true);
    


    const storageDataLength = getStoredDonation().length; 
        



    useEffect(()=>{
            const storedDonationIds = getStoredDonation();
            
            if(donations.length){
                const donated = donations.filter(donation => storedDonationIds.includes(donation.id))
                setDonat(donated);
                // setDisplyDonat(storedDonationIds.length);
            }


    },[donations])
    
    

    
 

    return (
        <div className="max-w-6xl my-5 md:mx-auto mx-2 mt-8">
               <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    donat.slice(0, displyDonat).map(donations => <Donate key={donations.id} donations={donations}></Donate>)
                }
               </div>

               <div  className={` ${ storageDataLength < 5 ? 'hidden' : '' } flex justify-center my-4 text-center `}>
                <button onClick={() => {  setDisplyDonat(storageDataLength), setHidden(false)}} className={`${hidden || 'hidden'}   bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded-md font-bold`}>See ALL</button>
               </div>
        </div>
    );
};

export default Donation;