import React, { Component } from 'react'

class Box extends Component {
    boxStyle = {
        backgroundColor: this.props.bgColor,
        height: Number(this.props.height),
        width: Number(this.props.width),
    }

    removeBox = () => {
        this.props.removeBox(this.props.id);
    }

    render () {
        return (
            <div>
                <div style={this.boxStyle}>
                </div>
                <button onClick={this.removeBox}>Remove the box!</button>
            </div>
        );
    }
}

export default Box;