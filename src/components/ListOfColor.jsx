import React, { useState } from "react";
import { TodoAddColor } from "../Redux/TodoSlice";
import { useDispatch } from 'react-redux';

function ListOfColor({ id, color }) {
   const SELLECTCOLOR = ["", "red", "green", "pink", "blue"];
  const dispatch = useDispatch();
   function handleColor(id, color) {
     dispatch(TodoAddColor({ id, color }));
   }

  console.log(color);
  return (
    <div>
      <select
        style={{ background: color }}
        onChange={(e) => {
          handleColor(id, e.target.value);
        }}
        value={color}
      >
        {SELLECTCOLOR.map((item, i) => (
          <option className={`text-${color}-500`} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListOfColor;
