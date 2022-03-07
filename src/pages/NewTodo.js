import { Container, TextField, Typography,Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import React, { useContext, useState } from 'react'
import { TodoContext } from '../store/todo-context';
const styles = {
  field: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'block'
  }
}
const NewTodo = () => {
  const ctx = useContext(TodoContext);

  const [title,setTitle] = useState('');
  const [titleError,setTitleError] = useState(false);
  const [description,setDescription] = useState('');
  const [descriptionError,setDescriptionError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDescriptionError(false)
    if(title === '' || title === null){
      setTitleError(true)
    }
    if(description === '' || description === null){
      setDescriptionError(true)
    }
    ctx.createTodo({
      title,
      description
    });
    setTitle('');
    setDescription('')
  }

  return (
    <Container>
      <Typography variant='h6' gutterBottom>
        Add New Task  
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Title"
          variant="outlined"
          color="primary" 
          fullWidth
          required
          sx={{
            ...styles.field
          }}
          error={titleError}
        /> 

        <TextField 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          label="Short Description"
          variant="outlined"
          color="primary" 
          fullWidth
          multiline
          rows={3}
          required
          sx={{
            ...styles.field
          }}
          error={descriptionError}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>

      </form>
    </Container>
  )
}

export default NewTodo