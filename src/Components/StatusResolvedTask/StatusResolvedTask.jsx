import React, { useState } from "react";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const StatusResolvedTask = ({
  status,
  inProgress,
  setInProgress,
  resolvedProgress,
  setResolvedProgress,
  removeStatus,
  deleteTicketToCustomer,
}) => {
  const [resolved, setResolved] = useState([]);
  return (
    <div>
      <h1>Task Status</h1>
      {status.map((taskStatus) => (
        <TaskStatus
          deleteTicketToCustomer={deleteTicketToCustomer}
          removeStatus={removeStatus}
          resolvedProgress={resolvedProgress}
          setResolvedProgress={setResolvedProgress}
          inProgress={inProgress}
          setInProgress={setInProgress}
          resolved={resolved}
          setResolved={setResolved}
          key={taskStatus.id}
          taskStatus={taskStatus}
        ></TaskStatus>
      ))}
      <h1>ResolvedTask</h1>
      {resolved.map((resolvedTask) => (
        <ResolvedTask
          key={resolvedTask.id}
          resolvedTask={resolvedTask}
        ></ResolvedTask>
      ))}
    </div>
  );
};

export default StatusResolvedTask;
