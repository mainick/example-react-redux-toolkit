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

// reducer
export default todoSlice.reducer;