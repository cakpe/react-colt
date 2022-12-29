import React from 'react'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function TodoList(props) { //this is how you indicate a functional component to take props
    return (
        <Paper>
            <List>
                {props.todos.map(todo => {
                    return (
                        <> {/*this is called a jsx fragment for when you want to return multiple components at once*/}
                            <ListItem>
                                <ListItemText>{todo.task}</ListItemText>
                            </ListItem>
                            <Divider />
                        </>
                    )
                })}
            </List>
        </Paper>
    )
}

export default TodoList;