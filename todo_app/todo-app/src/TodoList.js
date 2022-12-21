import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'react-uuid';

class TodoList extends Component {
    state = { todos: [] };

    addTask = (todo) => {
        let newTodo = {...todo, id: uuid()};
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    removeTask = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }

    render () {
        let todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} key={todo.id} removeTask={this.removeTask} id={todo.id}/>
        });

        return(
            <div>
                <h1>Todo List!</h1>
                <NewTodoForm addTask={this.addTask}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;