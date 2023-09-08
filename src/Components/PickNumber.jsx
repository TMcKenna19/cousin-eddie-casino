import { useState } from "react";

const PickNumber = () => {
    const [playerBalance, setPlayerBalance] = useState(25);
    const [playerBet, setPlayerBet] = useState();
    const [number, setNumber] = useState();
    const [playerNumber, setPlayerNumber] = useState();

    //Get random number
    const getNumber = () => {
        return Math.floor(Math.random() * 10) + 1;
    }
   
    const handleClick = () => {
        setNumber(getNumber);
        if(playerNumber = getNumber) {
            playerBet + playerBalance
        }
        console.log(number)
    }


    return(
        <>
        <h1>Pick A Number</h1>
        <p>${playerBalance}</p>
        <p>Dealer Number: {number}</p>
        <button onClick={handleClick}>Get Number</button>
        
        </>
    )
}

export default PickNumber;