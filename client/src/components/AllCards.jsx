import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CardList from './CardList';

const AllCards = (props) => {
    const [cards, setCards] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const removeFromDom = productId => {
        setCards(cards.filter(product => product._id != productId));
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/tradingcard')
            .then(response=>{
                setCards(response.data);
                console.log(cards)
                setLoaded(true);
            })
            .catch(error => console.error(error));
    },[]);

    return (
        <div className='m-6'>
           <hr/>
           {loaded && <CardList cards={cards} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default AllCards;
