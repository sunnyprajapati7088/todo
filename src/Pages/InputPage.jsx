import React, { useState } from "react";
import { TextInput } from "../components/Inputs";
import { useDispatch } from "react-redux";
import { add } from "../Redux/TodoSlice";

function InputPage() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function handleSubmit() {
    if (todo.trim() == '') {
      alert("write something")
      return 
    }
    dispatch(add(todo));
    setTodo('');
  }
  return (
    <div className="flex justify-between p-2">
      <TextInput name="todo" onchange={setTodo} text={todo} ></TextInput>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputPage;
