import {useState} from "react";
import './App.css';
import Counter from './components/counter';
console.log(Counter);

function App() {
const [count,setCount] = useState(0);

const changeCount = (value) =>{
  setCount(count + value);
}
const double = (value) =>{
  setCount(count * value);
}
  return (
    <div className="App">
      <Counter changeCount={changeCount} double={double}  count={count} />
    </div>
  );
}

export default App;