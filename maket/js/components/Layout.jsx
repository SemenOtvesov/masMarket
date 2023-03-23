import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header.jsx'
import Footer from "./Footer.jsx";

export default ({catalogCategories, firebaseConfig})=>{
    return(
        <>
            <Header catalogCategories={catalogCategories} firebaseConfig={firebaseConfig}/>
            <div className="body-blackBlur"></div>
            <Outlet/>
            <Footer />
        </>
    )
}
