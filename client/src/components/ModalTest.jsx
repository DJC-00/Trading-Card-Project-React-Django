import React, { useState, useEffect } from 'react';


const ModalTest = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button
                className="openModalBtn"
                onClick={() => {
                setIsModalOpen(!isModalOpen);
                console.log(isModalOpen)
                }}>
                Open
            </button>

            {isModalOpen ? (
                <div className=' modal'>b</div>

                )
                :
                (
                    ""
            )}
        </div>
    );
}

export default ModalTest;
