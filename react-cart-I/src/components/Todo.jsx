import 'antd/dist/antd.min.css';
import { Input } from "antd";
import { useState, useContext, useRef } from "react";
import { nanoid } from "nanoid";
import { Button, Modal } from "antd";
import { AppContext } from "../context/AppContext";
import { addTodo, deleteTodo, toggleTodo, editTodo } from "../Redux/Action";
import "./Todo.css";
import Typewriter from 'typewriter-effect';

export const Todo = () => {
    const { dispatch, getState } = useContext(AppContext);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const currid = useRef("");
    const addTodoItem = addTodo({ id: nanoid(), title: value, status: false });
    const showToggel = () => {
        setShow(true);
    };

    const clickOkay = () => {
        setShow(false);
    };

    const removeEdit = () => {
        setShow(false);
    };
    return (
        <>
            <div className="img">
                <h1><i style={{ color: "#ff471a" }}><Typewriter
                    options={{
                        strings: ['Todo App', 'Add Your Task', 'Todo Application', 'Add Task'],
                        autoStart: true,
                        loop: true,
                    }}
                /></i></h1>

                <Input
                    style={{ width: "40%", height: "40px" }}
                    placeholder="Enter your Todo name..."
                    onChange={(e) => setValue(e.target.value)}
                ></Input>
                <Button style={{ height: "40px", marginLeft: "1px" }}
                    type="primary"
                    onClick={() => {
                        dispatch(addTodoItem);
                        setData(getState());
                    }}
                >
                    Add Todo
                </Button>
                {data.map((e, i) => {
                    return (
                        <div key={e.id} className="dataHover" style={{ border: "1px solid black", width: "60%", margin: "10px auto", display: "flex", justifyContent: "center", backgroundColor: "#002933" }}>
                            <div style={{ width: "90%", paddingTop: "10px", display: "flex", justifyContent: "space-between" }}>
                                <div><h2 style={{ color: "white" }}>{i + 1}. {e.title} {e.status ? <span style={{ color: "green", marginLeft: "40px" }}>Completed</span> : <span style={{ color: "red", marginLeft: "40px" }}>Not-Completed</span>}</h2></div>
                                <div style={{ marginLeft: "15px" }}>
                                    <Button style={{ marginLeft: "10px" }}
                                        onClick={() => {
                                            dispatch(deleteTodo(e));
                                            setData(getState());
                                        }}
                                    >
                                        Delete
                                    </Button>
                                    <Button style={{ marginLeft: "10px" }}
                                        onClick={() => {
                                            dispatch(toggleTodo(e));
                                            setData(getState());
                                        }}
                                    >
                                        Toggle
                                    </Button>
                                    <Button style={{ marginLeft: "10px" }}
                                        type="primary"
                                        onClick={() => {
                                            currid.current = e.id;
                                            showToggel();
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Modal style={{ marginLeft: "10px auto" }}
                                        title="Basic Modal"
                                        visible={show}
                                        onOk={() => {
                                            dispatch(editTodo({ currid, value }));
                                            setData(getState());
                                            clickOkay();
                                        }}
                                        onCancel={removeEdit}
                                    >
                                        <p>Edit TODO</p>
                                        <Input onChange={(e) => setValue(e.target.value)}></Input>
                                    </Modal>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    );
};