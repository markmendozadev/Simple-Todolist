import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todo: [],
  createTodo: (payload) => {},
  deleteTodo: (id) => {}
});
const initialState = [
  {
    title: 'Clean Room',
    description: 'Clean My Room'
  },
  {
    title: 'Go To School',
    description: 'Get My Clearance Form'
  },
  {
    title: 'Sleep',
    description: 'Sleep Now!'
  }
]
const todoReducer = (state,action) => {
  if(action.type === 'CreateTodo'){
    return state.concat(action.payload)
  }
  if(action.type === 'DeleteTodo'){
    return state.filter(todo => todo.title !== action.title)
  }
  return state
}

const TodoProvider = (props) => {
  const [state,dispatch] = useReducer(todoReducer,initialState);

  const createTodoHandler = (newTodo) => {
    dispatch({type: 'CreateTodo', payload: newTodo})
  }
  const deleteTodoHandler = (title) => {
    dispatch({type: 'DeleteTodo', title})

  }
  const todoContext = {
    todo: state,
    createTodo: createTodoHandler,
    deleteTodo: deleteTodoHandler
  }

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  )
} 

export default TodoProvider;