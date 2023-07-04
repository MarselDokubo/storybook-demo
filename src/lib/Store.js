// A simple redux store/actions/reducer implementation

import { configureStore, createSlice } from "@reduxjs/toolkit";

/* The initial state of our store when the app loads */

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "1", title: "Something else", state: "TASK_INBOX" },
  { id: "1", title: "Something more", state: "TASK_INBOX" },
  { id: "1", title: "Something else again", state: "TASK_INBOX" },
];

const TaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};

/* The slice is created here */

const TasksSlice = createSlice({
  name: "Task box",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task === 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

/* The actions contained in the slice are exported for usage in our components */

export const { updateTaskState } = TasksSlice.actions;

/* Our app's store configuration goes here */

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default store;
