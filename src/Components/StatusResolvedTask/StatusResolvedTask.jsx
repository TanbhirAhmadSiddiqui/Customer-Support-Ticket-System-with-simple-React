import React from "react";
import TaskStatus from "../TaskStatus/TaskStatus";

const StatusResolvedTask = ({ status }) => {
  return (
    <div>
      {status.map((taskStatus) => (
        <TaskStatus key={taskStatus.id} taskStatus={taskStatus}></TaskStatus>
      ))}
    </div>
  );
};

export default StatusResolvedTask;
