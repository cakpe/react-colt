import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Die.css'

class Die extends Component {
    render() {
        const dice = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

        return (
            <div className='Die'>
                <FontAwesomeIcon icon={dice[this.props.face]}/>
            </div>
        );
    }
}

export default Die;