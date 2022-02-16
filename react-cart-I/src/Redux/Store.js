import { createStore } from "redux";
import { reducer } from "./Reducer";

const init = [];

export const store = createStore(reducer, init);