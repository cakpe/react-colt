import React, { Component } from 'react'

class NewTodoForm extends Component {
    state = { task: '' };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({task: ''});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo: </label>
                <input 
                placeholder='New task...'
                name='task'
                id='task'
                type='text'
                value={this.state.task}
                onChange={this.handleChange}
                />
                <button>Add Task!</button>
            </form>
        )
    }
}

export default NewTodoForm;