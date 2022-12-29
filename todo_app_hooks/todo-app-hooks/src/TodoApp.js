import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "fuck her", completed: true},
        {id: 2, task: "and her", completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodoText) => {
      setTodos( [...todos, {id: 4, task: newTodoText, completed: false}]);
    }

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

    <Grid container justify='center' style={{ marginTop: "1rem" }}> {/*this is what's gonna help you with sizing on small screens */}
      <Grid item xs={11} md={8} lg={4}>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </Grid>
    </Grid>
  </Paper>
}

export default TodoApp;