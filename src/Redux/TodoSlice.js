import { createSlice } from "@reduxjs/toolkit";
import { FilterByStatus } from "./../components/FilterComponets";
const uid = function () {
  return Date.now().toString(5) + Math.random().toString(36).substr(2);
};
const TodoSlice = createSlice({
  name: "todos",
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
    todoDelete: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    todoChangeStatus: (state, action) => {
      const { id, isChecked } = action.payload;
      const item = state.todo.find((item) => item.id === id);
      item.status = isChecked;

   
    },
    todoAddColor: (state, action) => {
      const { id, color } = action.payload;
      const item = state.todo.find((item) => item.id === id);
      item.color = color;
    },
    todoMarksAllComplete: (state, action) => {
      state.todo.forEach((item) => (item.status = true));
    },
    todoClear: (state, action) => {
      state.todo = state.todo.filter((item) => item.status === false);
    },
    todoUnMarkAll: (state, action) => {
      state.todo.forEach((item) => (item.status = false));
    },
  },
});
export const {
  add,
  todoDelete,
  todoChangeStatus,
  todoAddColor,
  todoMarksAllComplete,
  todoClear,
  todoUnMarkAll,
} = TodoSlice.actions;
export default TodoSlice.reducer;

export const selectRemainingTodoItem = (state) => {
  let remaining = 0;
  state.todos.todo.forEach((item) => {
    if (!item.status) {
      remaining++;
    }
  });
  return remaining;
};

export const selectAllTodoColor = (state) => {
  let allColor = [];
  state.todos.todo.forEach((todo) => {
    if (!allColor.includes(todo.color)) {
      allColor.push(todo.color);
    }
  });
  return allColor;
};

export const selectfilterTodo = (argu) => (state) => {
  const { filterTodoStatus, filterColors } = argu;
  const filteredItems = state.todos.todo.filter((item) => {
    const statusMatch =
      filterTodoStatus.all ||
      (filterTodoStatus.Active && !item.status) ||
      (filterTodoStatus.Completed && item.status);

    const selectedColors = Array.isArray(filterColors)
      ? filterColors.filter((c) => c.status).map((c) => c.colorName)
      : [];

    const colorMatch = selectedColors.length
      ? selectedColors.includes(item.color)
      : true; // If no colors are selected, include all

    return statusMatch && colorMatch;
  });

  return filteredItems;
};

export const selectAllTodo = (state) => {
  return state.todos.todo;
};
