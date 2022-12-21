import React, { Component } from 'react'

class Box extends Component {
    render () {
        return (
            <div>
                <div style={{
                    width: this.props.width, height: this.props.height, bgColor: this.props.bgColor
                }}>
                </div>
                <button>Remove the box!</button>
            </div>
        );
    }
}

export default Box;