import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllTodoColor,
  TodoAddColor,
  TodoChangeStatus,
  TodoDelete,
} from "../Redux/TodoSlice";
import { CheckInput } from "./Inputs";
import ListOfColor from "./ListOfColor";
import {
  Actions,
  AllColorFilter,
  FilterByStatus,
  RemainingTodo,
} from "./FilterComponets";

function Todos({ listColor }) {
  const AllTodo = useSelector((state) => state.Todos.todo);
  const AllColor = useSelector(AllTodoColor);
  const [filterStatus, SetFilterStatus] = useState({
    all: false,
    Active: false,
    Completed: false,
  });

  const [color, Setcolor] = useState({
    colorName: "",
    status: false,
  });

  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(TodoDelete(id));
  }

  function handleStatus(id, isChecked) {
    console.log(id, isChecked);
    dispatch(TodoChangeStatus({ id, isChecked }));
  }
  function handleColor(id, color) {
    dispatch(TodoAddColor({ id, color }));
  }
  function handleAllFilter() {
    return AllTodo;
  }
  function handleAllActive() {
    return AllTodo.filter((element) => element.status === false);
  }
  function handleAllComplete() {
    return AllTodo.filter((element) => element.status === true);
  }
  function handleColorFilter() {
    console.log(AllTodo.filter((element) => element.color === color.colorName));
    return AllTodo.filter((element) => element.color === color.colorName);
  }

  const filterData = filterStatus.Active
    ? handleAllActive()
    : filterStatus.Completed
    ? handleAllComplete()
    : filterStatus.all
    ? handleAllFilter()
    : color.status
    ? handleColorFilter()
    : AllTodo;

  return (
    <div className="flex flex-col h-full gap-2 p-3">
      {filterData.map((item, i) => (
        <div key={i}>
          <div className="flex w-[100%] justify-between items-center  h-10">
            <div className="flex gap-2">
              <input
                type="checkbox"
                onChange={(e) => handleStatus(item.id, e.target.checked)}
                checked={item.status}
                className="w-6 h-6 rounded-md"
              />
              <p className={``}>{item.todoName}</p>
            </div>
            <div className="flex gap-4">
              {" "}
              <ListOfColor
                handleColor={handleColor}
                id={item.id}
                color={item.color}
                listColor={listColor}
              />
              <button onClick={() => handleDelete(item.id)}>X</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <hr />
      {/*footer Section*/}
      <div className="flex w-full justify-between  p-2">
        <Actions />
        <RemainingTodo />
        <FilterByStatus
          SetFilterStatus={SetFilterStatus}
          filterStatus={filterStatus}
        />
        <AllColorFilter
          Setcolor={Setcolor}
          color={color}
          AllColor={AllColor}
          handleColorFilter={handleColorFilter}
          SetFilterStatus={SetFilterStatus}
        />
      </div>
    </div>
  );
}

export default Todos;
