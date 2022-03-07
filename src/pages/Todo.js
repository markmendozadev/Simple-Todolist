import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import TodoCard from '../components/TodoCard'
import { TodoContext } from '../store/todo-context'

const Todo = () => {
  const ctx = useContext(TodoContext);
  const todoList = ctx.todo;

  const deleteHandler = (title) => {
    ctx.deleteTodo(title)
  }
  if(todoList.length <=0 ) {
    return <Typography variant="h4">You're up to date..</Typography>
  }
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {todoList.map((todo) => (
        <Grid item xs={12} md={6} lg={3} key={todo.title}>
          <TodoCard title={todo.title} subheader='category' description={todo.description} deleteHandler={deleteHandler} />
        </Grid>
      ))}


    </Grid>
  )
}

export default Todo