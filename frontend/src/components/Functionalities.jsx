import React from "react";
import { MdDirections } from 'react-icons/md';
import { MdShare } from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';


const Functionalities = ({ view, handleDirectionClick, onShareButton }) => {

    const iconStyle = { color: '#1A73E8', fontSize: "1.5rem" };
    const aboutIconStyle = { color: 'grey', fontSize: "1.5rem", marginRight: "5px" }

    const directionButtonClickHandler = () => {
        handleDirectionClick();
    }

    const handleButtonClick = () => {
        onShareButton();
    }

    return (
        <div>
            { view === "tab1" ? 
                <div className="grid grid-cols-2">
                    <div className="flex flex-col select-none items-center cursor-pointer" onClick={() => directionButtonClickHandler()}>
                        <MdDirections style={iconStyle} />
                        <span style={{ color: '#1A73E8' }} >Directions</span>
                    </div>
        
                    <div className="flex flex-col select-none items-center cursor-pointer" onClick={() => handleButtonClick()}>
                        <MdShare style={iconStyle} />
                        <span style={{ color: '#1A73E8' }} >Share</span>
                    </div>
                </div> 
                
                :
                
                <div className="px-4">
                    <div className="text-stone-600 pl-4">
                        Accessibility
                    </div>
                    
                    <div className="grid grid-cols-2 text-sm mt-3">
                        <div className="flex">   
                            <FiCheck style={aboutIconStyle} />
                            <div>Wheelchair-accessible car park</div>
                        </div>

                        <div className="flex">
                            <FiCheck style={aboutIconStyle} />
                            <div>Wheelchair-accessible entrance</div>
                        </div>
                    </div>
                </div>
        }
        </div>
    )
}

export default Functionalities;