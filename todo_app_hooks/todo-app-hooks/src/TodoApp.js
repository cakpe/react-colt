import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "fuck her", completed: false},
        {id: 1, task: "and her", completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos);

    return <Paper
        style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
        }}
        elevation={0}
    >
    <AppBar color='primary' position='static' style={{ height: "64px" }}>
      <Toolbar>
        <Typography color='inherit'>TODOS WITH HOOKS</Typography>
      </Toolbar>
    </AppBar>

    <TodoList todos={todos}/>
    <Grid container justify='center' style={{ marginTop: "1rem" }}>
      <Grid item xs={11} md={8} lg={4}>
        
      </Grid>
    </Grid>
  </Paper>
}

export default TodoApp;