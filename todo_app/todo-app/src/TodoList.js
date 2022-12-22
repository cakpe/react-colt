import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'react-uuid';
import './TodoList.css';

class TodoList extends Component {
    state = { todos: [] };

    addTask = (todo) => {
        let newTodo = {...todo, id: uuid(), completed: false};
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    removeTask = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }

    updateTask = (id, updatedTask) => {
    
        this.setState(state => ({
            todos: state.todos.map(todo => {
                var returnValue = {...todo};

                if (todo.id === id) {
                    returnValue.task = updatedTask;
                }
                return returnValue;
            })
        }));
    }

    completeTask = (id) => {
    
        this.setState(state => ({
            todos: state.todos.map(todo => {
                var returnValue = {...todo};

                if (todo.id === id) {
                    returnValue.completed = !returnValue.completed;
                }
                return returnValue;
            })
        }));
    }

    render () {
        let todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} key={todo.id} removeTask={this.removeTask} 
            id={todo.id} updateTask={this.updateTask} completed={todo.completed} completeTask={this.completeTask}/>
        });

        return(
            <div className='TodoList'>
                <h1>Todo List!<span>a react program</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm addTask={this.addTask}/>
            </div>
        )
    }
}

export default TodoList;