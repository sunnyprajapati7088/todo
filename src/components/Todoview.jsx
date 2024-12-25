import React from "react";
import ListOfColor from "./ListOfColor";
import { todoChangeStatus, todoDelete } from "../Redux/TodoSlice";
import { useDispatch } from "react-redux";
function Todoview({ item }) {
  const dispatch = useDispatch();
  function handleTodoStatus(id, isChecked) {
    console.log(id, isChecked);
    dispatch(todoChangeStatus({ id, isChecked }));
  }
  function handleDelete(id) {
    dispatch(todoDelete(id));
  }
  return (
    <div className="flex w-[100%] justify-between items-center  h-10">
      <div className="flex gap-2">
        <input
          type="checkbox"
          onChange={(e) => handleTodoStatus(item.id, e.target.checked)}
          checked={item.status}
          className="w-6 h-6 rounded-md"
        />
        <p className={``}>{item.todoName}</p>
      </div>
      <div className="flex gap-4">
        {" "}
        <ListOfColor id={item.id} color={item.color} />
        <button onClick={() => handleDelete(item.id)}>X</button>
      </div>
    </div>
  );
}

export default Todoview;
