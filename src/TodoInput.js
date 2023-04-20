import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/todoActions";

export function TodoInput() {
  const [newTodo, setNewTodo] = useState();

  function handleClick() {
    dispatch(
      addTodo({
        text: newTodo,
        completed: false,
      })
    );
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setNewTodo(value);
  }

  const dispatch = useDispatch();

  return (
    <>
      <h2>Todo input</h2>
      <input type="text" value={newTodo} onChange={handleInputChange} /> <br />
      <button onClick={handleClick}>Add todo</button>
    </>
  );
}
