import { Paper, TextField } from '@mui/material';
import React from 'react'
import useInputState from './custom_hooks/useInputState';

function TodoForm(props) {
    const [value, handleChange, reset] = useInputState(""); //because this is how we defined our custom hook

    return (
        <Paper>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.addTodo(value);
                reset();
            }}>
            <TextField value={value} onChange={handleChange}></TextField>
            </form>
        </Paper>
    )
}

export default TodoForm;