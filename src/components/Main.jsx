import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Icon from "./Icon";
import Hero from "./Hero";
import Footer from "./Footer";
// import "./App.css";


function Main() {
    return (
        <div className="main">
            <Icon />
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </div>
    )
}

export default Main;