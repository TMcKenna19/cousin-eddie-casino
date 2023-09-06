import numbers from '../Images/numbers.jpeg';
import coinToss from '../Images/coinToss.jpeg';
import war from '../Images/war.jpeg';
import rps from '../Images/rps.jpeg';
import hands from '../Images/hands.jpeg';

const Home = () => {
    return (
        <>
        <h1>Welcome to Cousin Eddie's Casino</h1>
        <p>We don't have them games you'll find at them regular casinos</p>
        <div className="games-container">
            <div className="game">
                <img src={numbers} alt="numbers" />
                <h4>Pick a Number</h4>
            </div>
            <div className="game">
                <img src={coinToss} alt="coin" />
                <h4>Coin Toss</h4>
            </div>
            <div className="game">
                <img src={war} alt="cards" />
                <h4>War</h4>
            </div>
            <div className="game">
                <img src={rps} alt="rock paper scissor" />
                <h4>Rock Paper scissor</h4>
            </div>
            <div className="game">
                <img src={hands} alt="fists" />
                <h4>Pick a Hand</h4>
            </div>
        </div>
        </>
    )
}


export default Home;