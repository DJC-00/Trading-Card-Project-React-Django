import React from 'react';

const UserProfile = (props) => {
    let cardStats = {
        count : 0,
        avgRare : "",
        highRated : {
            name : "",
            rating : 0,
            totalRates : 0
        },
        lowRated : {
            name : "",
            rating : 0,
            totalRates : 0
        },
        bestStats : "",
        worstStats : "",
    }

    function setBestStats(){
        let statTotal = 0
        let tempBest = 0
        let tempWorst = 0
        props.cards.map(card => {
            let statAvg = 0
            card.stats.map(stat => {
                statTotal += stat
            });
            statAvg = statTotal / 4
            if (statAvg > tempBest){
                cardStats.bestStats = card.name
                tempBest = statAvg

            }
            if (statAvg < tempWorst || tempWorst == 0){
                cardStats.worstStats = card.name
                tempWorst = statAvg

            }
            statTotal = 0
        })

    }

    function setCardStats(){
        cardStats.count = props.cards.length;
        let statTotal = 0
        let tempBest = 0
        let tempWorst = 0
        let cardCount = 0;
        let avgRarity= 0;
        let highRatedCard = {
            name : "",
            rating : 0,
            totalRates : 0
        };
        let lowRatedCard ={
            name : "",
            rating : 0,
            totalRates : 0
        };
        props.cards.forEach(card => {

            let statAvg = 0
            card.stats.map(stat => {
                statTotal += stat
            });
            statAvg = statTotal / 4
            if (statAvg > tempBest){
                cardStats.bestStats = card.name
                tempBest = statAvg

            }
            if (statAvg < tempWorst || tempWorst == 0){
                cardStats.worstStats = card.name
                tempWorst = statAvg

            }
            statTotal = 0

            let currentCardRating = card.rating / card.ratingCount

            if (currentCardRating > highRatedCard.rating) {
                highRatedCard.name = card.name;
                highRatedCard.totalRates = card.ratingCount;
                highRatedCard.rating = card.rating / card.ratingCount;

            }
            if (currentCardRating < lowRatedCard.rating || lowRatedCard.rating === 0) {
                lowRatedCard.name = card.name;
                lowRatedCard.totalRates = card.ratingCount;
                lowRatedCard.rating = card.rating / card.ratingCount;
                console.log(card.rating / card.ratingCount, "a")
            }

            // Check Rarity
            if (card.rarity === "Common") {
                avgRarity += 1;
            } else if (card.rarity === "Uncommon") {
                avgRarity += 2;
            } else if (card.rarity === "Rare") {
                avgRarity += 3;
            } else if (card.rarity === "Mythic") {
                avgRarity += 4;
            }
            avgRarity = avgRarity / cardStats.count;

            if (avgRarity <= 1){
                cardStats.avgRare = "Common"
            } else if (avgRarity <= 2){
                cardStats.avgRare = "Uncommon"
            } else if (avgRarity <= 3){
                cardStats.avgRare = "Rare"
            } else if (avgRarity <= 4){
                cardStats.avgRare = "Mythic"
            }

        });
        cardStats.highRated.name = highRatedCard.name;
        cardStats.highRated.rating = highRatedCard.rating;
        cardStats.highRated.totalRates = highRatedCard.totalRates;
        cardStats.lowRated.name = lowRatedCard.name;
        cardStats.lowRated.rating = lowRatedCard.rating;
        cardStats.lowRated.totalRates = lowRatedCard.totalRates;
    }
    setCardStats()
    setBestStats()
    return (
        <div className='container border border-3 border-light p-4'>
            <div className="d-flex gap-4 py-2">
                <div className=" border-3 border-primary border-bottom border-end w-50 p-2 mb-3 shadow">
                    <h2>Cards Owned: {cardStats.count}</h2>
                </div>
                <div className="border-bottom border-end border-3 border-primary w-50 p-2 mb-3 shadow">
                    <h2>Average Rarity: <span className='text-danger'>{cardStats.avgRare}</span></h2>
                </div>
            </div>

            <div className="d-flex gap-4 py-2">
                <div className="border-bottom border-end border-3 border-primary w-50 p-2 mb-3 shadow">
                    <h2>Best Card: <span className='text-danger'> {cardStats.bestStats}</span></h2>
                </div>
                <div className="border-bottom border-end border-3 border-primary w-50 p-2 mb-3 shadow">
                    <h2>Worst Card: <span className='text-danger'> {cardStats.worstStats}</span></h2>
                </div>
            </div>

            <div className="d-flex gap-4 py-2">
                <div className="border border-3 border-success w-50 p-2 mb-3 shadow">
                    <h3>Highest Rated Card: <span className='text-danger'>{cardStats.highRated.name}</span></h3>
                    <h3>Avg. Rating: <span className='text-danger'>{cardStats.highRated.rating}</span></h3>
                    <h3>Number of Ratings: <span className='text-danger'>{cardStats.highRated.totalRates}</span></h3>
                </div>
                <div className="border border-3 border-secondary w-50 p-2 mb-3 shadow">
                    <h3>Lowest Rated Card: <span className='text-danger'>{cardStats.lowRated.name}</span></h3>
                    <h3>Avg. Rating: <span className='text-danger'>{cardStats.lowRated.rating}</span></h3>
                    <h3>Number of Ratings: <span className='text-danger'>{cardStats.lowRated.totalRates}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
