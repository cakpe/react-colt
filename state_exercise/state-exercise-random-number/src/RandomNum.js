import React, { Component } from 'react'

class RandomNum extends Component {
    state = { randomNum: 0 };

    generateRand = (e) => {
        let newRandNum = Math.floor(Math.random() * this.props.maxNum);
        this.setState({randomNum: newRandNum});
    }

    render () {
        return (
            <div>
                {this.state.randomNum !== 7 ? <h1>Your random Number is: {this.state.randomNum}</h1> : <h1>You win!!!</h1>}
                {this.state.randomNum === 7 ? <p></p> : <button onClick={this.generateRand}>Click me!</button>}
            </div>
        );
    }
}

export default RandomNum;