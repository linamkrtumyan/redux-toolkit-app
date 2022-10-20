import React from "react";
import {useDispatch} from "react-redux"
import { removeTodo ,toggleTodoComplete } from "../store/todoSlice";

function TodoItem({ id, text, completed }) {


  const dispatch = useDispatch()

  // const removeItem = dispatch(removeTodo(id))

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <span>{text}</span>
      <span style={{ color: "red" }}
       onClick={() => dispatch(removeTodo(id))}
       >
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
