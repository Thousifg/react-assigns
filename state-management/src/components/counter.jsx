import "./style.css";
function Counter({count,changeCount,double}) {
    return <div>
        <h1>Counter: {count}</h1>
        <button className="btn1" onClick={()=>changeCount(1)}>Add</button>
        <button className="btn2" onClick={()=>changeCount(-1)}>Sub</button>
        <button className="btn3" onClick={()=>double(2)}>Double</button>
    </div>
}

export default Counter;