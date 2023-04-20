import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "./redux/actions/todoActions";

function selectTodosFromState(state) {
  return state;
}

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodosFromState);

  function handleToggle(index) {
    dispatch(toggleTodo(index));
  }

  function handleDeleteButtonClick(index) {
    dispatch(deleteTodo(index));
  }

  return (
    <>
      <h1>Todo list</h1>
      {todos.map((todo, index) => {
        return (
          <>
            <button onClick={() => handleDeleteButtonClick(index)}>
              Delete
            </button>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span key={index}>{todo.text}</span>
            <br />
          </>
        );
      })}
    </>
  );
}
