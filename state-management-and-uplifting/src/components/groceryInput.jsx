import { useState } from "react";
import './style.css';

export const GroceryInput = ({getData}) => {
    const [text, setText] = useState("");

    const handleChange = (e)=>{
        setText(e.target.value);
    }
    const handleClick = () => {
        getData(text);
    }
    return (
        <>
        <div className="inputDiv">
            <input type="text" placeholder="Enter Grocery items" onChange={handleChange} className="inputBox"/>
            <button onClick={handleClick} className="addBtn">Add</button>
        </div>
        </>
    )
}