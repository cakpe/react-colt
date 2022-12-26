import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {

    getColor() {
        if (this.props.votes >= 15) {
          return "#4CAF50";
        } else if (this.props.votes >= 12) {
          return "#8BC34A";
        } else if (this.props.votes >= 9) {
          return "#CDDC39";
        } else if (this.props.votes >= 6) {
          return "#FFEB3B";
        } else if (this.props.votes >= 3) {
          return "#FFC107";
        } else if (this.props.votes >= 0) {
          return "#FF9800";
        } else {
          return "#f44336";
        }
    }

    upVote = () => {
        this.props.handleVote(this.props.id, 1);
    }

    downVote = () => {
        this.props.handleVote(this.props.id, -1);
    }

    render() {
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <div className='Joke-arrows' onClick={this.upVote}>up</div>
                    <span className='Joke-votes' style={{borderColor: this.getColor()}}>{this.props.votes}</span> {/* this.getColor() has to have the parenthesis so that it is executed immediately */}
                    <div className='Joke-arrows' onClick={this.downVote}>down</div>
                </div>
                <div className='Joke-text'>{this.props.text}</div>
            </div>
        )
    }
}

export default Joke;