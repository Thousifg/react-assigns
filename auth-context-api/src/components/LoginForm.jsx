import {useState, useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
export const Login = () => {
    const {toggleAuth} = useContext(AuthContext)
    const [login, setLogin] = useState({
        email:"",
        password:"",
    })
    const [form, setForm] = useState([]);
    const handleChange = (e) =>{
        let {name,value} = e.target;
        setLogin({
            ...login,
            [name] : value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setForm([...form, login]);
        console.log("submit",form);
        fetch("https://reqres.in/api/login", {
            method : "POST",
            body : JSON.stringify(login),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then((res) =>  {
            if(res.error) {
                alert("Please give vaild email I'D and password ");
            }else {
                console.log(res.token);
                toggleAuth(res.token);
            }
        })
    }
  return (
    <>
      <div>
          <form onSubmit={handleSubmit}>
              <label>Email :- </label>
              <input type="email" name="email" onChange={handleChange} placeholder="Enter your Email" />
              <br/>
              <label>Password :- </label>
              <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" />
              <br/>
              <input type="submit" />
          </form>
      </div>
    </>
  );
};