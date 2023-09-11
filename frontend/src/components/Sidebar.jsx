import React, { useState } from "react";
import { MdLocationOn } from 'react-icons/md';


// components import
import Functionalities from "./Functionalities";
import DirectionForm from "./DirectionForm";

const Sidebar = ({ data, onFormSubmit, onShareButton }) => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleOverViewClick = () => {
        setActiveTab("tab1");
    }

    const handleAboutViewClick = () => {
        setActiveTab("tab2");
    }

    const handleDirectionClick = (e) => {
        setIsFormVisible(!isFormVisible);
    }

    return (
        <div className="py-4">
            <div className="text-center text-2xl font-normal mb-6">    
                {data.name}
            </div>

            <div className="flex justify-around">
                <button className={`pb-2 text-stone-600 ${activeTab === "tab1" ? 'active' : ""}`} onClick={() => handleOverViewClick()}>
                    Overview
                </button>

                <button className={`pb-2 text-stone-600 ${activeTab === "tab2" ? 'active' : ""}`} onClick={() => handleAboutViewClick()}>
                    About
                </button>
            </div>

            <div className="border-b border-t border-grey-500 py-4 px-2">
                <Functionalities view={activeTab} handleDirectionClick={handleDirectionClick} onShareButton={onShareButton} />
            </div>

            {
                isFormVisible && <DirectionForm onFormSubmit={onFormSubmit} />
            }

            <div className="flex px-4 items-center mt-6">
                <div>
                    <MdLocationOn style={{ color: '#1A73E8', fontSize: "2.5rem" }} />
                </div>
                    {data.address}
            </div>
        </div>
    );
}

export default Sidebar;