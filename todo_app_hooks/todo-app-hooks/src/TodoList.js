import React from 'react'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';

function TodoList(props) { //this is how you indicate a functional component to take props
    return (
        <Paper>
            <List>
                {props.todos.map(todo => {
                    return (
                        <> {/*this is called a jsx fragment for when you want to return multiple components at once*/}
                            <Todo task={todo.task} key={todo.id} completed={todo.completed}/>
                            <Divider />
                        </>
                    )
                })}
            </List>
        </Paper>
    )
}

export default TodoList;