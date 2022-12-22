import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    state = {
        isEditing: false,
        task: this.props.task
    };

    removeTask = () => {
        this.props.removeTask(this.props.id);
    }

    toggleForm = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.updateTask(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }

    handleEdit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleComplete = () => {
        this.props.completeTask(this.props.id);
    }

    render () {
        let result;
        if(this.state.isEditing) {
            result = 
            <div className='Todo'>
                <form onSubmit={this.handleUpdate}>
                    <input type='text'
                    name = 'task'
                    id = 'task'
                    value={this.state.task}
                    onChange={this.handleEdit}
                    />
                    <button>Save</button>
                </form>
            </div>
        }
        else {
            result = <div className='Todo'>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.removeTask}>X</button>
                <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleComplete}>{this.props.task}</li>
            </div>
        }

        return result;
    }
}

export default Todo;