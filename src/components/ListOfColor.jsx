import React, { useState } from "react";

function ListOfColor({ handleColor, id, color, listColor }) {
  

  console.log(color);
  return (
    <div>
      <select
        style={{ background: color, }}
        onChange={(e) => {
          handleColor(id, e.target.value);
        }}
        value={color}
      >
        {listColor.map((item, i) => (
          <option className={`text-${color}-500`} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListOfColor;
