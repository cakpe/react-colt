import React, { Component } from 'react'
import './Card.css';

class Card extends Component {
    state = {transform: ''};
    
    //beautiful use of componentDidMount() here because if we don't put the transformation here,
    //the card is re-rendered everytime, thereby changing the transformation everytime a card is drawn
    componentDidMount() {
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this.setState(
            {
                transform: `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
            }
        )
    }

    render() {
        return (
            <img style={{ transform: this.state.transform }} className='Card' src={this.props.image} alt={this.props.name}/>
        )
    }
}

export default Card;