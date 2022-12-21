import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    state = { todos: [{task: "sex with me"}, {task: "so amazing"}] };

    addTask = (todo) => {
        this.setState(state => ({
            todos: [...state.todos, todo]
        }));
    }

    render () {
        let todos = this.state.todos.map(todo => {
            return <Todo task={todo.task}/>
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