import './style.css';

export const GroceryList = ({title,id,GId,deletGrocery}) => {
    return (
        <>
            <div className="itemList">
              <div className="items"> {GId}.   {title} </div> <div><button onClick={()=>{deletGrocery(id)}} className="deleteBtn">Delete</button></div>
            </div>
        </>
    )
}