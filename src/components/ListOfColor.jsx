import React, { useState } from "react";
import { todoAddColor } from "../Redux/TodoSlice";
import { useDispatch } from "react-redux";

function ListOfColor({ id, color }) {
  const COLORS = ["", "red", "green", "pink", "blue"];
  const dispatch = useDispatch();
  function handleColor(id, color) {
    dispatch(todoAddColor({ id, color }));
  }
  return (
    <div>
      <select
        style={{ background: color }}
        onChange={(e) => {
          handleColor(id, e.target.value);
        }}
        value={color}
      >
        {COLORS.map((item, i) => (
          <option className={`text-${color}-500`} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListOfColor;
