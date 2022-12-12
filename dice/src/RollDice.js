import React, { Component } from 'react'
import Die from './Die';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './RollDice.css'

class RollDice extends Component {
    state = { diceOne: 0, diceTwo: 0 };
    static defaultProps = {
        faces: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
    };

    roll = (e) => {
        let faceOne = Math.floor(Math.random() * this.props.faces.length);
        let faceTwo = Math.floor(Math.random() * this.props.faces.length);
        
        this.setState({diceOne: faceOne, diceTwo: faceTwo});
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-dice-container'>
                    <Die face={this.state.diceOne}/>
                    <Die face={this.state.diceTwo}/>
                </div>
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;