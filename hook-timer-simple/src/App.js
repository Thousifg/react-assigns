import './App.css';
import {Timer} from "./components/timer";
import {useState} from 'react';

function App() {
  let startTime = 0, endTime = 10;
  const [show, setShow] = useState(true);
  return (
    <div className="App">
     {show ? <Timer startTime={startTime} endTime={endTime} /> : null}
      <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;