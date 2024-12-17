import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllTodoColor,
  RemainingTodoItem,
  TodoClear,
  TodoMarksAllComplete,
  TodoRemaining,
} from "../Redux/TodoSlice";

export const Actions = () => {
  const dispatch = useDispatch();
  function handleAllComplete() {
    dispatch(TodoMarksAllComplete());
  }
  function handleClear() {
    dispatch(TodoClear());
  }
  return (
    <div className="flex flex-col w-[20%] text-center ">
      <p>Actions</p>
      <button onClick={() => handleAllComplete()}>All Marks Complete</button>
      <button onClick={() => handleClear()}>Clear All Complete</button>
    </div>
  );
};

export const RemainingTodo = () => {
  const Remaining = useSelector(RemainingTodoItem);

  return (
    <div className="flex flex-col w-[20%] text-center">
      <h1>Remaining Todos</h1>
      <p>{Remaining} item left</p>
    </div>
  );
};

export const FilterByStatus = ({ SetFilterStatus, filterStatus }) => {
  return (
    <div className="flex flex-col w-[20%] text-center">
      <h1>FilterByStatus</h1>
      <h1
        onClick={() =>
          SetFilterStatus({
            all: true,
            Active: false,
            Completed: false,
          })
        }
        className={`${filterStatus.all ? "bg-blue-700" : ""} rounded-sm`}
      >
        All
      </h1>
      <h1
        onClick={() =>
          SetFilterStatus({
            all: false,
            Active: true,
            Completed: false,
          })
        }
        className={`${filterStatus.Active ? "bg-blue-700" : ""} rounded-sm`}
      >
        Active
      </h1>
      <h1
        onClick={() =>
          SetFilterStatus({
            all: false,
            Active: false,
            Completed: true,
          })
        }
        className={`${filterStatus.Completed ? "bg-blue-700" : ""} rounded-sm`}
      >
        Completed
      </h1>
    </div>
  );
};

export const AllColorFilter = ({ AllColor, color, Setcolor }) => {
  return (
    <div className="flex flex-col justify-around">
      <h1>Filter By Color</h1>
      {AllColor.map((ColorItem, i) => (
        <div key={i} className="w-[100px] flex gap-2 items-center">
          <input
            type="checkbox"
            value={ColorItem}
            onChange={(e) => {
              e.target.checked
                ? Setcolor({ colorName: ColorItem, status: true })
                : Setcolor({ colorName: "", status: false });
            }}
            checked={ColorItem.status}
          ></input>
          <div className={`w-6 h-4 rounded-md bg-` + ColorItem + `-500 `}></div>
          <p>{ColorItem}</p>
        </div>
      ))}
    </div>
  );
};
