import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { updateTaskState } from "../lib/Store";

function TaskList() {
  const tasks = useSelector((state) => {
    const taskInOrder = [
      ...state.taskbox.tasks.filter((task) => task.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((task) => task.state !== "TASK_PINNED"),
    ];
    const filteredTasks = taskInOrder.filter(
      (task) => task.state === "TASK_INBOX" || task.state === "TASK_PINNED"
    );
    return filteredTasks;
  });

  const status = useSelector((state) => state.taskbox);

  const dispatch = useDispatch();

  const pinTask = (id) => {
    dispatch(updateTaskState({ id, newTaskState: "TASK_PINNED" }));
  };
  const archiveTask = (id) => {
    dispatch(updateTaskState({ id, newTaskState: "TASK_ARCHIVED" }));
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {taskInOrder.map((task) => {
        return (
          <div className="list-items">
            <Task key={task.id} task={task} {...events} />
          </div>
        );
      })}
    </div>
  );
}
TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
};

export default TaskList;
