import React from "react";
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="grid grid-cols-2 h-24 py-3 px-8 justify-between">
            <div className="flex items-center">
                <img src={Logo} className="h-20"></img>
                <div className="text-4xl font-bold header-text">
                    Geo Locate
                </div>
            </div>
            <div className="flex items-center font-mont text-lg font-medium justify-between">
                <div>
                    <a href="">Home</a>
                </div>
                <div>
                    <a href="">About</a>
                </div>
                <div>
                    <a href="">Contact</a>
                </div>
                <div>
                    <a href="">Services</a>
                </div>
            </div>
        </div>
    )
}

export default Header;