import React, { Component } from 'react'
import Die from './Die';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './RollDice.css'

class RollDice extends Component {
    state = { diceOne: 0, diceTwo: 0, rolling: false };
    static defaultProps = {
        faces: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
    };

    roll = (e) => {
        let faceOne = Math.floor(Math.random() * this.props.faces.length);
        let faceTwo = Math.floor(Math.random() * this.props.faces.length);
        
        this.setState({diceOne: faceOne, diceTwo: faceTwo, rolling: true});

        //wait one second then sent rolling to false
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000);
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-dice-container'>
                    <Die face={this.state.diceOne} rolling={this.state.rolling}/>
                    <Die face={this.state.diceTwo} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RollDice;