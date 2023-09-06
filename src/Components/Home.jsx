import numbers from '../Images/numbers.jpeg';
import coinToss from '../Images/coinToss.jpeg';
import war from '../Images/war.jpeg';
import rps from '../Images/rps.jpeg';
import hands from '../Images/hands.jpeg';
import tikTakToe from '../Images/tikTakToe.jpeg';
import neon from '../Images/neon.mp4';

const Home = () => {
    return (
        <>
        <div className="header">
            <video src={neon} autoPlay loop muted />
            <h1>Cousin Eddie's Casino</h1>
            <p>We don't have them games you'll find at them regular casinos</p>  
        </div>
        <div className="game-container">
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
                <h4>Rock Paper Scissor</h4>
            </div>
            <div className="game">
                <img src={hands} alt="fists" />
                <h4>Pick a Hand</h4>
            </div>
            <div className="game">
                <img src={tikTakToe} alt="tik tak toe" />
                <h4>Tik Tak Toe</h4>
            </div>
        </div>
        </>
    )
}


export default Home;