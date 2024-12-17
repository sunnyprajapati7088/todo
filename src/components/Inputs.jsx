import React from "react"

export const TextInput = ({ name, onchange, text }) => {
    return <input className="w-[50vw] h-[7vh] pl-4" placeholder={"What needs to be done?" } type="text" value={text} name={name} onChange={(e) => onchange(e.target.value)} />;
};

export const CheckInput = ({ name, onchange, isChecked }) => {
    return(
        <input type="checkbox" name={name} onChange={(e) => onchange(e.target.checked)} checked={isChecked} />
    )
};