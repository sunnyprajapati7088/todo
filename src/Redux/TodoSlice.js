import { createSlice } from "@reduxjs/toolkit";
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
    TodoRemaining: (state, action) => {
     
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