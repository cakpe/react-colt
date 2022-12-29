import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; //you have to npm install the dependency first
import EditIcon from '@mui/icons-material/Edit';

import React from 'react'

function Todo(props) {
    return (
        <ListItem>
            <Checkbox checked={props.completed}></Checkbox>
            <ListItemText style={{textDecoration: props.completed ? "line-through" : "none"}}>
                {props.task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;