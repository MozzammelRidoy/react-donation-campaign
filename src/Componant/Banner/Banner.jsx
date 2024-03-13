import { createContext, useState } from "react";
import Contents from "../Contents/Contents";

export const SeachContext = createContext('all');

const Banner = () => {

    const [searchValue, setSearchValue] = useState('all'); 

    const handleSeachSubmit = e => {
        e.preventDefault();
        const value = e.target.search.value;

        
       setSearchValue(value);

       e.target.search.value = '';
        
    }
    
    return (

        <>
            <div className="flex flex-col z-10 md:z-auto   mb-8 py-6 text-center justify-center items-center relative md:h-screen h-4/5" >
                <img className="block md:hidden -top-1 absolute inset-0 bg-cover bg-center -z-10 w-full opacity-10" src="https://i.postimg.cc/JndDHL17/volunteers-holding-boxes-containing-donations-charity.jpg" alt="" />

                <img className="hidden md:block -top-52 absolute inset-0 bg-cover bg-center -z-10 w-full opacity-10" src="https://i.postimg.cc/JndDHL17/volunteers-holding-boxes-containing-donations-charity.jpg" alt="" />

                <div className="z=50">
                    <h2 className="text-2xl md:text-6xl font-bold">I Grow By Helping People In Need</h2>
                    <form onSubmit={handleSeachSubmit} className="mt-3 md:mt-10  flex items-center justify-center">
                        <input name="search"  type="text" placeholder="Search here...." className="z-10 border-b  border-gray-600 rounded-sm py-2 px-3 md:px-5 md:w-1/2 w-3/5" />
                        <button  className="z-50 bg-[tomato] px-3 md:px-5 font-semibold text-white py-2 rounded-sm hover:bg-[#a03522]">Search</button>
                    </form>
                </div>
            </div>
            

           <SeachContext.Provider value={searchValue}>
           <Contents></Contents>
           </SeachContext.Provider>
        </>

    );
};

export default Banner;