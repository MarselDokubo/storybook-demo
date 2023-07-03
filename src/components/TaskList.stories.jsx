import { Default as TaskDefault } from "./Task.stories";

import TaskList from "./TaskList";
import Task from "./Task";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem " }}>{story()}</div>],
  tags: ["autodocs"],
};

export const Default = {
  args: {
    //Shaping the stories through args composition
    // The data was inherited from the default story in Task.stories.jsx

    tasks: [
      { ...TaskDefault.args.task, id: "1", title: "Task 1" },
      { ...TaskDefault.args.task, id: "2", title: "Task 2" },
      { ...TaskDefault.args.task, id: "3", title: "Task 3" },
      { ...TaskDefault.args.task, id: "4", title: "Task 4" },
      { ...TaskDefault.args.task, id: "5", title: "Task 5" },
      { ...TaskDefault.args.task, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTask = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 Pinned", state: "TASK_PINNED" },
    ],
  },
};

export const Loading = {
  args: {
    loading: true,
  },
};
export const NoTask = {
  args: {
    tasks: [],
    loading: false,
  },
};
