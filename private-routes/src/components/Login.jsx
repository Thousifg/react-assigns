import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
    const { handleToken } = useContext(AuthContext);
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const handleChange = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };
    return (
        <div>
            <h2>Login</h2>
            <label style={{marginRight:"29px"}}>Email:- </label>
            <input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Enter Username"
            ></input>
            <br />
            <label>Password:-</label>
            <input
                onChange={handleChange}
                type="text"
                name="password"
                placeholder="Enter Password"
            ></input>
            <br />
            <button
                onClick={() => {
                    handleToken("jagantoken");
                    navigate(-1);
                }}
            >
                Submit
            </button>
        </div>
    );
};