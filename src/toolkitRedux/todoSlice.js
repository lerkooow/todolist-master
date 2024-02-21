/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTask = {
        id: new Date().toISOString(),
        task: action.payload,
        checked: false,
      };
      state.todos.push(newTask);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleTodo(state, action) {
      const todoId = action.payload;
      const todosCheck = state.todos.find((todo) => todo.id === todoId);
      if (todosCheck) {
        todosCheck.checked = !todosCheck.checked;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    deleteTask(state, action) {
      const todoId = action.payload;
      state.todos = state.todos.filter((item) => item.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const selectAllTodo = (state) => state.todos.todos;
export const getTodoStatus = (state) => state.todos.status;
export const getRocketsError = (state) => state.todos.error;

export default todosSlice.reducer;
export const { addTodo, toggleTodo, deleteTask } = todosSlice.actions;
