import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header.jsx'
import Footer from "./Footer.jsx";

export default ({firebaseConfig})=>{
    return(
        <>
            <Header firebaseConfig={firebaseConfig}/>
            <div className="body-blackBlur"></div>
            <Outlet/>
            <Footer />
        </>
    )
}
