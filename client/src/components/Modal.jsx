import React, { useState, useEffect } from 'react';

import "./Modal.css"

const Modal = ({closeModal}) => {
    return (
        <div className = "modalBackground">
            <div className='container w-50 border border-3'>
                <button onClick={() => closeModal(false)}>X</button>
                <div className="text-center">
                    <h1>Card Name</h1>
                </div>
                <div className=" modal-body">
                    <div className="container border border-3" style={{width:"400px", height:"500px"}}></div>

                    <div>
                        <h3 className='text-center py-2'>Rarity</h3>
                        <div className='container w-75 d-flex justify-content-around pb-2'>
                            <div className="">
                                <p>Attack</p>
                                <p>Defense</p>
                            </div>
                            <div className="">
                                <p>Speed</p>
                                <p>Luck</p>
                            </div>
                        </div>
                        <h3 className='text-center pb-2'>Special Attack</h3>
                    </div>
                </div>
                <hr />
                <div className='container w-75 d-flex justify-content-around pb-2'>
                        <p>Creator</p>
                        <p>Owner</p>
                    </div>
                <div className="footer">
                    <button>Cancel</button>
                </div>
            </div>

        </div>
    );
}

export default Modal;
