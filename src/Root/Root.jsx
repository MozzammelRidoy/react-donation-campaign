// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Componant/Footer/Footer";
import Home from "../Componant/Home/Home";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
            <Home />
            <Outlet />
        </div>
        <Footer />
    </div>
    );
};

export default Root;