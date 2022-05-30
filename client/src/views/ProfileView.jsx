import { useState, useEffect } from 'react';
import axios from 'axios';

import UserProfile from '../components/UserProfile';
import CardList from '../components/CardList';

const ProfileView = () => {

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
        <div>
            <div className="pb-5">
                <h1>USERNAME</h1>
                <UserProfile cards={cards.filter(card => card.owner.id == 1)}/>
            </div>
            <h3>USERNAME's Library</h3>
            <div className='container border border-3 rounded-3 border-light mb-5'>

                {loaded && <CardList cards={cards.filter(card => card.owner.id == 1)} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    );
}

export default ProfileView;
