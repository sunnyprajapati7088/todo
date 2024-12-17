import { useEffect, useRef, useState } from "react";
import Todos from "./components/Todos";
import { TextInput } from "./components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { add, RemainingTodoItem } from "./Redux/TodoSlice";
import InputPage from "./Pages/InputPage";
import FooterSection from "./Pages/FooterSection";
import { FilterByStatus } from "./components/FilterComponets";
import ListOfColor from './components/ListOfColor';

function App() {
  const listColor = ["", "red", "green", "pink", "blue"];
  const listColorr="blue"
  const InputRef = useRef(null);
  return (
    <div className="bg-gray-200 w-full max-h-full  ">
      <h1 className="w-full text-center text-[40px] font-bold pb-5 font-serif flext flex-col">
        Todos
      </h1>
      <div className="w-[60%] h-[80vh] bg-[#fcf9f9] rounded-lg p-3 mx-auto ">
        <InputPage  />
        <Todos listColor={listColor} />
      </div>
    </div>

    
  );  
}

export default App;
