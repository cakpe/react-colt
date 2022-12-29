import { Paper, TextField } from '@mui/material';
import React from 'react'
import useInputState from './custom_hooks/useInputState';

function TodoForm(props) {
    const [value, handleChange, reset] = useInputState(""); //because this is how we defined our custom hook

    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.addTodo(value);
                reset();
            }}>
            <TextField 
            value={value} 
            onChange={handleChange}
            margin='normal'
            label='Add new todo'
            fullWidth
            ></TextField>
            </form>
        </Paper>
    )
}

export default TodoForm;