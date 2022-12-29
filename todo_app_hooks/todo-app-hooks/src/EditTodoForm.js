import { TextField } from '@mui/material'
import React from 'react'
import useInputState from './custom_hooks/useInputState';

function EditTodoForm (props) {
    const [value, handleChange, reset] = useInputState(props.task); //because this is how we defined our custom hook

    return (
        <form
        onSubmit={(e) => { //decided to write the func in-line just to show syntax variety
          e.preventDefault();
          props.editTodo(props.id, value);
          reset();
          props.toggleEditForm();
        }}
        style={{ marginLeft: "1rem", width: "50%" }}
      >
        <TextField
          margin='normal'
          value={value}
          onChange={handleChange}
          fullWidth
          autoFocus //this is so the cursor is focused on the text field right away
        />
      </form>
  
    )
}

export default EditTodoForm;