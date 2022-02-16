import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOOGLE_TODO } from "./ActionType";
export const reducer = (store, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return [
                ...store,
                { id: payload.id, title: payload.title, status: payload.status },
            ];
        case DELETE_TODO:
            return store.filter((e) => e.id !== payload.id);

        case TOOGLE_TODO:
            let deleteTodo = [...store];
            deleteTodo.forEach((e) => {
                if (e.id === payload.id) {
                    e.status = !e.status;
                }
            });
            return deleteTodo;

        case EDIT_TODO:
            let editTodo = [...store];
            editTodo.forEach((e) => {
                if (e.id === payload.currid.current) {
                    e.title = payload.value;
                }
            });
            return editTodo;

        default:
            return store;
    }
};