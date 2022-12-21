import React, { Component } from 'react'
import Todo from './Todo';

class TodoList extends Component {
    state = { todos: [{task: "sex with me"}, {task: "so amazing"}] };

    render () {
        let todos = this.state.todos.map(todo => {
            return <Todo task={todo.task}/>
        });

        return(
            <div>
                <h1>Todo List!</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;