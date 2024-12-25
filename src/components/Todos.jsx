import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectfilterTodo } from "../Redux/TodoSlice";
import Todoview from "./Todoview";
import FooterSection from "../Pages/FooterSection";
function Todos() {
  const [filterTodoStatus, setFilterTodoStatus] = useState({
    all: true,
    Active: false,
    Completed: false,
  });
  const [filterColors, setFilterColors] = useState([]);
  const filterData = useSelector(
    selectfilterTodo({ filterTodoStatus, filterColors })
  );
  return (
    <div className="flex flex-col h-full gap-2 p-3">
      {filterData.length ? (
        filterData.map((item, i) => <Todoview item={item} key={i} />)
      ) : (
        <p>No Todo found</p>
      )}
      <hr />
      {/*footer Section*/}
      <FooterSection
        setFilterTodoStatus={setFilterTodoStatus}
        filterTodoStatus={filterTodoStatus}
        setFilterColors={setFilterColors}
        filterColors={filterColors}
      />
    </div>
  );
}
export default Todos;
