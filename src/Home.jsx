import React from "react";
import Head from "./Components/Head";
import NavBar from "./Components/NavBar";
import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";

export default function Home(){
    return(<div>
        <Head/>
    <NavBar/>
    <MainBody/>
    <Footer/>
        </div>
    );
}