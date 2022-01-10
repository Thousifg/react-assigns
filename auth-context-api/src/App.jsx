import './App.css';
import {Login} from "./components/LoginForm";
import {Status} from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status/>
      <br/>
      <Login/>
    </div>
  );
}

export default App;