import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; //you have to npm install the dependency first
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from "./custom_hooks/useToggleState";

import React from 'react'
import EditTodoForm from './EditTodoForm';

function Todo(props) {
    const [isEditing, toggle] = useToggleState(false); //we honestly didn't have to use our own custom hook. Colt is just extra

    const removeItem = () => {
        props.removeTodo(props.id);
    }

    const toggleItem = () => {
        props.toggleTodo(props.id);
    }

    return (
        <ListItem style={{ heigjt: "64px" }}>
            {isEditing ? (
                <EditTodoForm
                editTodo={props.editTodo}
                id={props.id}
                task={props.task}
                toggleEditForm={toggle}
                />
            ) : 
            <>
                <Checkbox checked={props.completed} onClick={toggleItem}></Checkbox>
                <ListItemText style={{textDecoration: props.completed ? "line-through" : "none"}}>
                    {props.task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton onClick={removeItem}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={toggle}>
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo;