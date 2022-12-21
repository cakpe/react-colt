import React, { Component } from 'react'

class BoxForm extends Component {
    state = {
        height: 0,
        width: 0,
        bgColor: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({ height: 0, width: 0, bgColor: '' });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='height'>Height: </label> {/*when using labels, htmlFor must match the id of the input*/}
                    <input
                        id='height'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='width'>Width: </label>
                    <input
                        id='width'
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='bgColor'>backgroundColor: </label>
                    <input
                        id='bgColor'
                        name='bgColor'
                        value={this.state.bgColor}
                        onChange={this.handleChange}
                    />
                    <button>Add a new box!</button>
                </form>
            </div>
        )
    }
}

export default BoxForm;