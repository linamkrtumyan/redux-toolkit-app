import "./App.css";
import {  useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {useDispatch} from "react-redux"
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");

  
const dispatch = useDispatch()

const addTask = () => dispatch(addTodo(text)  )



  const toggleTodoComplete = (todoId) => {
    // setTodos(
    //   todos.map(
    //     todo => {
    //       if(todo.id !== todoId) return todo

    //       return {
    //         ...todo,
    //         completed : !todo.completed
    //     }}
    //   )
    // )
  }

  const removeTodo = (todoId) => {
    // setTodos(todos.filter(todo => todo.id !== todoId ))
  }

  return (
    <div className="App">
      <InputField text={text} 
      handleSubmit={addTask}
       handleInput={setText} />
<TodoList  removeTodo={removeTodo} toggleTodoComplete={toggleTodoComplete} />
     
    </div>
  );
}

export default App;
