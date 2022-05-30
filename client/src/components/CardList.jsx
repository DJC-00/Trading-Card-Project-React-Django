import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState("")
    console.log(props.cards)

    return (
        <>

        <p className='text-centered m-5' >{message}</p>
        <div className='d-flex flex-wrap justify-content-around align-items-baseline'>
            {props.cards.map((card, i) =>
            <>
            <div className='contaianer col-3 m-2 '>
                <div key={card.id} className="card bg-gradient text-center my-3">
                <img src={require(`../../src/static/Images/${card.link}.png`)} alt="" />
                </div>
                <div className='row gap-3 m-2'>
                    <a className='btn btn-sm btn-outline-info col' href={"./card/" + card._id}>View Details</a>
                    {/* <button onClick={(e) => { deleteCard(card._id); } } className='btn btn-outline-danger col'>
                        Delete
                    </button> */}

                </div>
            </div>
            </>
            )}
        </div>

        </>
    )
}

export default CardList;


// return (
//     <>

//     <p className='text-centered m-5' >{message}</p>
//     <div className='d-flex flex-wrap justify-content-around align-items-baseline'>
//         {props.cards.map((card, i) =>
//         <>
//         <div className='contaianer col-3 m-2 '>
//             <div key={card.id} className="card bg-gradient text-center my-3">
//             <img src={require(`../../src/static/Images/TestCard_00${card.id}.png`)} alt="" />
//             </div>
//             <div className='row gap-3 m-2'>
//                 <a className='btn btn-sm btn-outline-info col' href={"./card/" + card._id}>View Details</a>
//                 {/* <button onClick={(e) => { deleteCard(card._id); } } className='btn btn-outline-danger col'>
//                     Delete
//                 </button> */}

//                 <button class="openModalBtn" onClick={() => setOpenModal(!openModal)}>button</button>
//                 {openModal && <h1>a</h1>}
//             </div>
//         </div>
//         </>
//         )}
//     </div>

//     </>
// )
// }

// export default CardList;
