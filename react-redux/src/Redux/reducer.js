import { ADD_TODO } from "./actionType";
const initialState = {
  todo: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
      };

    default:
      return state;
  }
};
