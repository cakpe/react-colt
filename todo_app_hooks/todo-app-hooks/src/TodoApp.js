import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'react-uuid';

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "fuck her", completed: true},
        {id: 2, task: "and her", completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodoText) => {
      setTodos( [...todos, {id: uuid(), task: newTodoText, completed: false}]);
    }

    const removeTodo = (todoId) => {
      const updatedTodos = todos.filter(todo => {
        return todo.id !== todoId
      });

      setTodos(updatedTodos);
    }

    const toggleTodo = (todoId) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      });

      setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId ? {...todo, task: newTask} : todo
      });

      setTodos(updatedTodos);
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
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      </Grid>
    </Grid>
  </Paper>
}

export default TodoApp;