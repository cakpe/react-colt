import React, { Component } from 'react'
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        title: "Let's flip a coin!",
    }
    state = { heads: true, totalCount: 0, headsCount: 0, tailsCount: 0, imgUrl: 'default'};

    flip() {
        const headsUrl = 'https://tinyurl.com/react-coin-heads-jpg';
        const tailsUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg';
        //select heads or tails
        let headsOrTails = Math.floor(Math.random() * 2) === 1 ? true : false;
        this.setState(curState => ({ heads: headsOrTails, imgUrl: headsOrTails ? headsUrl:tailsUrl }));

        //increment counts
        this.setState(curState => ({
            totalCount: curState.totalCount + 1,
            headsCount: curState.heads === true ? curState.headsCount + 1 : curState.headsCount,
            tailsCount: curState.heads === false ? curState.tailsCount + 1 : curState.tailsCount,
        }));
    }
    flipCoin = () => {
        this.flip();
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Coin imgUrl={this.state.imgUrl}/>
                <button onClick={this.flipCoin}>Flip me!</button>
                <p>Out of {this.state.totalCount} flips, there have been {this.state.headsCount} 
                heads and {this.state.tailsCount} tails</p>
            </div>
        )
    }
}

export default CoinFlipper;