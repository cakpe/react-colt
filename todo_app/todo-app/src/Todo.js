import React, { Component } from 'react'

class Todo extends Component {

    removeTask = () => {
        this.props.removeTask(this.props.id);
    }

    render () {
        return(
            <div>
                <button>Edit</button>
                <button onClick={this.removeTask}>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;