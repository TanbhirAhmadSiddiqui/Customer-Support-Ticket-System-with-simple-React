import React from "react";

const TaskStatus = ({
  taskStatus,
  resolved,
  setResolved,
  inProgress,
  setInProgress,
  resolvedProgress,
  setResolvedProgress,
  removeStatus,
}) => {
  const handleTaskResolved = (task) => {
    const newResolved = [...resolved, task];
    setResolved(newResolved);
    const newInProgress = inProgress - 1;
    setInProgress(newInProgress);
    const newResolvedProgress = resolvedProgress + 1;
    setResolvedProgress(newResolvedProgress);
    removeStatus(task);
  };
  return (
    <div className="border p-1 rounded m-1">
      <h1>{taskStatus.title}</h1>
      <button
        onClick={() => handleTaskResolved(taskStatus)}
        className="w-full bg-green-700 rounded py-2"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
