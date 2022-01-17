import './App.css';
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/settings"
          element={
            <PrivateRoutes>
              <Settings />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;