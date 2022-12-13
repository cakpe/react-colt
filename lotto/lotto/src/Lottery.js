import React, { Component } from 'react'
import Ball from './Ball';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    state = { nums: Array.from({ length: this.props.numBalls }) };

    generate() {
        //we use the callbak method of setState below because we are mutating state and this is the react way!
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }
    handleClick = () => {
        this.generate();
    }

    render() {
        return (
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => {
                        return <Ball num={n}/>
                    })}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;