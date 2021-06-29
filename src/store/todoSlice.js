import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getTodo = createAsyncThunk(
  "todo/fetchList",
  () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json()
      })
      .then(json => json);
});

const initialState = {
    loading: false,
    error: "",
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = state.todos.concat(action.payload)
        }
    },
    extraReducers: {
        [getTodo.pending]: state => {
            state.loading = true;
        },
        [getTodo.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = "";
            state.todos = action.payload;
        }
    }
});

// actions per il dispatch
export const { addTodo } = todoSlice.actions;

// reducer
export default todoSlice.reducer;