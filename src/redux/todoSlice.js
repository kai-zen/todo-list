//typed rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksList: [],
    doneTasks: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let tasksList = [...state.tasksList];
            let newId = 0;
            if (tasksList.length > 0) {
                let lastIndex = parseInt(tasksList.length) - 1;
                newId = tasksList[lastIndex].id + 1;
            }
            let newTask = {
                id: newId,
                content: action.payload,
            }
            state.tasksList.push(newTask)
        },
        deleteTodo: (state, action) => {
            state.tasksList = state.tasksList.filter(task => task.id !== action.payload);
        },
        updateTodo: (state, action) => {
            let i = 0;
            while (true) {
                if (state.tasksList[i].id === action.payload.id) {
                    break;
                }
                ++i;
            }
            state.tasksList[i].content = action.payload.editingText;
        },
        AddToDone: (state, action) => {
            state.doneTasks.push(action.payload);
        },
        RemoveFromDone: (state, action) => {
            state.doneTasks = state.doneTasks.filter(task => task.id === action.payload);
        }
    }
});

export const { addTodo, deleteTodo, updateTodo, AddToDone, RemoveFromDone } = todoSlice.actions;
export const selectTasksList = state => state.tasksList;
export const selectDoneTasks = state => state.doneTasks;
export default todoSlice.reducer;