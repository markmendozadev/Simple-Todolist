import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import NewTodo from "./pages/NewTodo";
import Todo from "./pages/Todo";
import TodoProvider from './store/todo-context';


const darkTheme = createTheme({

  zIndex: {
    appBar: 1201,
  }
});



function App() {
  return (
    <TodoProvider>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Todo />}/>
              <Route path='/new' element={<NewTodo />}/>
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App;
