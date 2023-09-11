import React, { useState } from 'react';

const SharePopup = ({ link, onShareButton }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                setCopied(true);
            })
            .catch(error => console.error('Error copying link: ', error));
    };

    const handleCancelClick = () => {
        onShareButton();
    } 

    return (
        <div className='flex justify-center w-full inset h-1/2 absolute items-center'>
            <div className="bg-white flex justify-between border p-4 rounded shadow-lg">
                <div>
                    <p className='text-lg font-medium'>Share</p>
                    <p className='text-stone-500 text-sm'>Link to Share</p>
                    <p className='underline text-sm'>{link}</p>
                    <div className='flex justify-center'>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                        onClick={handleCopy}
                    >
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleCancelClick()}>X</button>
                </div>
            </div>
        </div>
    );
};

export default SharePopup;
