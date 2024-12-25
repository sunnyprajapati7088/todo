import React, { useState } from "react";
import { Actions, AllColorFilter, FilterByStatus, RemainingTodo } from "../components/FilterComponets";

function FooterSection({
  setFilterTodoStatus,
  filterTodoStatus,
  setFilterColors,
  filterColors,
}) {
  return (
    <div className="flex w-full justify-between  p-2">
      <Actions />
      <RemainingTodo />
      <FilterByStatus
        setFilterTodoStatus={setFilterTodoStatus}
        filterTodoStatus={filterTodoStatus}
        setFilterColors={setFilterColors}
        filterColors={filterColors}
      />
      <AllColorFilter
        setFilterColors={setFilterColors}
        filterColors={filterColors}
        setFilterTodoStatus={setFilterTodoStatus}
      />
    </div>
  );
}

export default FooterSection;
