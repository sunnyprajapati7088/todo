import { createSlice } from "@reduxjs/toolkit";
import { FilterByStatus } from './../components/FilterComponets';
const uid = function () {
  return Date.now().toString(5) + Math.random().toString(36).substr(2);
};
const TodoSlice = createSlice({
  name: "Todos",
  initialState: {
    todo: [],
  },
  reducers: {
    add: (state, action) => {
      const todoData = action.payload;
      const addData = {
        id: uid(),
        todoName: todoData,
        status: false,
        color: "",
      };

      state.todo.push(addData);
    },
    TodoDelete: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    TodoChangeStatus: (state, action) => {
      const { id, isChecked } = action.payload;
      const item = state.todo.find((item) => item.id === id);
      item.status = isChecked;

      //   state.todo.push({...ToChange,status:!isChecked})
    },
    TodoAddColor: (state, action) => {
      const { id, color } = action.payload;
      const item = state.todo.find((item) => item.id === id);
      item.color = color;
    },
    TodoMarksAllComplete: (state, action) => {
      state.todo.forEach((item) => (item.status = true));
    },
    TodoClear: (state, action) => {
    state.todo=  state.todo.filter((item) => (item.status === false));
    },
    TodoUnMarkAll: (state, action) => {
        state.todo.forEach((item) => (item.status = false));
     
    },
  },
});
export const {
  add,
  TodoDelete,
  TodoChangeStatus,
  TodoAddColor,
  TodoMarksAllComplete,
  TodoClear,
  TodoRemaining,
  TodoUnMarkAll,
} = TodoSlice.actions;
export default TodoSlice.reducer;

export const RemainingTodoItem = (state) => {
  let Remaining = 0;
  state.Todos.todo.forEach(item => {
    if (!item.status) {
      Remaining++;
    }
  })
  return Remaining;
  
}

export const AllTodoColor = (state) => {
  let allColor = [];
  state.Todos.todo.forEach((todo) => {
    if (!allColor.includes(todo.color)) {
      allColor.push(todo.color);
    }
  });
  return allColor;
};

export const filterTodo = (argu) => (state) => {
  const { filterStatus, filterColors } = argu;
  console.log("Selected Colors:", filterColors);

  const filteredItems = state.Todos.todo.filter((item) => {
    
    const statusMatch =
      filterStatus.all ||
      (filterStatus.Active && !item.status) || 
      (filterStatus.Completed && item.status);

   
   const selectedColors = Array.isArray(filterColors)
     ? filterColors.filter((c) => c.status).map((c) => c.colorName)
     : [];

console.log(selectedColors)
    const colorMatch = selectedColors.length
      ? selectedColors.includes(item.color)
      : true; // If no colors are selected, include all

    return statusMatch && colorMatch;
  });

  return filteredItems;
};
