import React, { Component } from 'react'
import './Coin.css'

class Coin extends  Component {
    render() {
        return(
            <div className='Coin'>
                {this.props.imgUrl !== "default" ? <img src={this.props.imgUrl} alt="coin heads or tails"/> : <p></p>}
            </div>
        )
    }
}

export default Coin;