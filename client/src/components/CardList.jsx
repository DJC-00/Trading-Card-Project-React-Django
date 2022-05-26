import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = (props) => {
    const [message, setMessage] = useState("")
    console.log(props.cards)

    const deleteCard = (cardId) => {
        console.log("delete", cardId)
        axios.delete('http://localhost:8000/api/card/' + cardId)
            .then(response => {
                props.removeFromDom(cardId)
                setMessage(`Card ${cardId} deleted`)
            })
            .catch(err => console.error(err));
    }

    return (
        <>
        <p className='text-centered m-5' >{message}</p>
        <div className='d-flex flex-wrap justify-content-around'>
            {props.cards.map((card, i) =>
            <>
            <div className='contaianer col-3 m-2 '>
                <div key={card.id} className="card bg-gradient text-center my-3">
                    <p className='is-size-4'>{card.name}</p>
                    <p className='is-size-4'>{card.owner}</p>
                    <div className='d-flex justify-content-center gap-5'>
                        <p className=''>{card.stats[0]}</p>
                        <p className=''>{card.stats[1]}</p>
                    </div>
                    <div className='d-flex justify-content-center gap-5'>
                        <p className=''>{card.stats[2]}</p>
                        <p className=''>{card.stats[3]}</p>
                    </div>
                    <p>{card.specMove}</p>
                </div>
                <div className='row gap-3 m-2'>
                    <a className='btn btn-outline-light col' href={"./card/" + card._id}>View Details</a>
                    <button onClick={(e) => { deleteCard(card._id); } } className='btn btn-outline- danger col'>
                        Delete
                    </button>
                </div>
            </div>
            </>
            )}
        </div>

        </>
    )
}

export default CardList;
