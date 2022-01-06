import {GroceryInput} from "./GroceryInput";
import {GroceryList} from "./GroceryList";
import {nanoid} from "nanoid";
import { useState } from "react";

export const Grocery = () =>{
    const [list, setList] = useState([]);

    const handleChange = (title) =>{
        const payload ={
            title,
            state: false,
            id:nanoid(8),
        }
        setList([...list, payload])
    }
    const deletGrocery = (id) => {
        let updatedGrocery = list.filter((e) => e.id !== id);
        setList(updatedGrocery);
    }
    return (
        <>
            <GroceryInput getData={handleChange}/>
            {list.map((e,i)=>(
                <GroceryList key={e.id} {...e} GId={i+1} deletGrocery={deletGrocery}/>
            ))}
        </>
    )
}