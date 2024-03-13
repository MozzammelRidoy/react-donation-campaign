// import React from 'react';

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Donate = ({ donations }) => {
    const { title, id, image, color, category, donate_price } = donations;
    const ColorApply = (title) => {
        if(color==='red'){
            return `${title}-red-`;
        }
        else if(color==='blue'){
            return `${title}-blue-`;
        }
        else if(color==='green'){
            return `${title}-green-`;
        }
    }
    return (
        <div className="">

            <div className={`grid md:grid-cols-5  border-0 md:border md:${ColorApply('bg')}200 rounded-md  md:gap-4`}>
               <div className="md:col-span-2">
               <figure><img className="image-full md:rounded-s-md" src={image} alt="" /></figure>
               </div>
                <div className="md:col-span-3 flex flex-col mt-2 md:mt-0  justify-center">
                    <div className="md:space-y-2 space-y-1">
                    <p className="text-xs "><span className={` ${ColorApply('bg')}200 py-1 px-2 text-${color}-700 rounded-md `}>{category}</span></p>
                    <h2 className="text-sm font-semibold">{title}</h2>
                    <p className={` text-xs font-bold text-${color}-700 `}>${donate_price}</p>
                    </div>
                    <div className="mt-2">
                        <Link to={`/details/${id}`}><button className={` py-2 px-3 ${ColorApply('bg')}600 hover:bg-${color}-800 text-sm font-semibold text-white rounded-md `} >View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

Donate.propTypes = {
    donations: PropTypes.object
}

export default Donate;