import { useEffect, useState } from "react";


const PickNumber = () => {
    const [playerBalance, setPlayerBalance] = useState(25);
    const [dealerNumber, setDealerNumber] = useState();
    const [formData, setFormData] = useState({
        playerNumber: 0,
        playerBet: 0
    })
    
    const changeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
   
    const submitHandler = e => {
        e.preventDefault();
        const newDealerNumber = Math.floor(Math.random() * 1 + 1);
        setDealerNumber(newDealerNumber);
        if(formData.playerNumber == newDealerNumber){
            setPlayerBalance(Number(formData.playerBet) + Number(playerBalance))
        }else {
            setPlayerBalance(Number(playerBalance) - Number(formData.playerBet))
        }
        console.log("dealer number ", newDealerNumber);
        console.log("player number ", formData.playerNumber);
        console.log("Player bet ", formData.playerBet)
        console.log("player balance ", playerBalance)
        
    }

    
    
    return(
        <>
        <div className="header">
            <h1>Pick A Number</h1>
            <p>Player balance: ${playerBalance}</p>
            <p>Dealer Number: {dealerNumber}</p>
        </div>
        <div className="player-form">
            <form onSubmit={submitHandler}>
                <div className="form-input">
                    <input type="number" name="playerBet" id="" value={formData.playerBet} onChange={changeHandler} placeholder="Make a Wager" />
                    <input type="number" name="playerNumber" id="" value={formData.playerNumber} onChange={changeHandler} placeholder="Guess a number" />
                </div>             
                <button type="submit" className="btn btn-outline-warning mt-3">Place Bet</button>
            </form>
        </div>
        
        
        </>
    )
}

export default PickNumber;