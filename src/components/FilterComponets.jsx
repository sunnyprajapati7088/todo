import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllTodoColor,
  selectRemainingTodoItem,
  todoClear,
  todoMarksAllComplete,
  todoUnMarkAll,
} from "../Redux/TodoSlice";

export const Actions = () => {
  const dispatch = useDispatch();
  function handleAllComplete() {
    dispatch(todoMarksAllComplete());
  }
  function handleClear() {
    dispatch(todoClear());
  }
  function handleAllUnmarks() {
    dispatch(todoUnMarkAll());
  }
  return (
    <div className="flex flex-col w-[20%] text-center ">
      <p>Actions</p>
      <button className="border" onClick={() => handleAllComplete()}>
        All Marks Complete
      </button>
      <button className="border" onClick={() => handleClear()}>
        Clear All Complete
      </button>
      <button className="border" onClick={() => handleAllUnmarks()}>
        {" "}
        AllUnMark{" "}
      </button>
    </div>
  );
};

export const RemainingTodo = () => {
  const remaining = useSelector(selectRemainingTodoItem);

  return (
    <div className="flex flex-col w-[20%] text-center">
      <h1>Remaining Todos</h1>
      <p>{remaining} item left</p>
    </div>
  );
};

export const FilterByStatus = ({ setFilterTodoStatus, filterTodoStatus }) => {
  return (
    <div className="flex flex-col w-[20%] text-center">
      <h1>FilterByStatus</h1>
      <button
        onClick={() =>
          setFilterTodoStatus({
            all: true,
            Active: false,
            Completed: false,
          })
        }
        className={`${filterTodoStatus.all ? "bg-blue-700" : ""} rounded-sm`}
      >
        All
      </button>
      <button
        onClick={() =>
          setFilterTodoStatus({
            all: false,
            Active: true,
            Completed: false,
          })
        }
        className={`${filterTodoStatus.Active ? "bg-blue-700" : ""} rounded-sm`}
      >
        Active
      </button>
      <button
        onClick={() =>
          setFilterTodoStatus({
            all: false,
            Active: false,
            Completed: true,
          })
        }
        className={`${
          filterTodoStatus.Completed ? "bg-blue-700" : ""
        } rounded-sm`}
      >
        Completed
      </button>
    </div>
  );
};

export const AllColorFilter = ({ filterTodoStatus, setFilterColors }) => {
  const allColor = useSelector(selectAllTodoColor);
  const addColor = (colorName, status) => {
    setFilterColors((prevColors) => {
      const existingIndex = prevColors.findIndex(
        (item) => item.colorName === colorName
      );
      if (existingIndex >= 0) {
        const updatedColors = [...prevColors];
        updatedColors[existingIndex].status = status;
        return updatedColors;
      }
      return [...prevColors, { colorName, status }];
    });
  };

  return (
    <div className="flex flex-col justify-around">
      <h1>Filter By Color</h1>
      {allColor.map((ColorItem, i) => (
        <div key={i} className="w-[100px] flex gap-2 items-center">
          <input
            type="checkbox"
            value={ColorItem}
            onChange={(e) => addColor(ColorItem, e.target.checked)}
          />
          <div
            style={{ background: ColorItem, width: "10px", height: "10px" }}
          ></div>
          <p>{ColorItem}</p>
        </div>
      ))}
    </div>
  );
};
