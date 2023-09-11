import React, { useState } from 'react';

const DirectionForm = ({ onFormSubmit }) => {
    const [ origin, setOrigin ] = useState("Set Origin...");

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(origin);
        setOrigin("");
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col p-4 items-center'>
            <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} className='w-60 p-2 input-origin rounded' onClick={() => setOrigin("")} />
            <input type="submit" style={{ backgroundColor: "#1A73E8", color: "#ffffff" }} className='w-32 px-4 py-2 rounded cursor-pointer' value="SET" />
        </form>
    );
}

export default DirectionForm;