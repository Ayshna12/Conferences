import React, { Component } from 'react';
// import collegelogo from "./images/collegelogo.jpg";

function Navbar() {
    return (
        <div className="navbar">
            <div className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li>
                        <div className="search">
                            <input className="srch" type="search" name="" placeholder="Type to search" />
                            <a href="#"><button className="btn">Search</button></a>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;