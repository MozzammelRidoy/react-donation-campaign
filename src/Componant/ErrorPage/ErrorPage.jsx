// import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-10">
                <h2 className="my-5 text-2xl md:text-5xl font-semibold">Opps !!! Sorry Page Not Found</h2>
            <Link to='/'><button className="py-3 px-12 text-center border-1 bg-red-600 hover:bg-red-800 text-white rounded-lg font-semibold">Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;