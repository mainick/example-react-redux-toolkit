import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = state.todos.concat(action.payload.title)
        }
    }
});

// actions per il dispatch
export const { addTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;

// reducer
export default todoSlice.reducer;