import React, { useState } from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import StatusResolvedTask from "../StatusResolvedTask/StatusResolvedTask";

const CustomerOverview = ({
  promiseTickets,
  inProgress,
  setInProgress,
  resolvedProgress,
  setResolvedProgress,
  deleteTicketToCustomer,
}) => {
  const [status, setStatus] = useState([]);
  const removeStatus = (removed) => {
    const updateStatus = status.filter(
      (singleStatus) => singleStatus.id !== removed.id,
    );
    setStatus(updateStatus);
  };
  return (
    <div className="flex flex-col lg:flex-row max-w-300 mx-auto gap-5 py-5">
      <CustomerTickets
        promiseTickets={promiseTickets}
        inProgress={inProgress}
        setInProgress={setInProgress}
        status={status}
        setStatus={setStatus}
      ></CustomerTickets>
      <StatusResolvedTask
        deleteTicketToCustomer={deleteTicketToCustomer}
        removeStatus={removeStatus}
        resolvedProgress={resolvedProgress}
        setResolvedProgress={setResolvedProgress}
        inProgress={inProgress}
        setInProgress={setInProgress}
        status={status}
      ></StatusResolvedTask>
    </div>
  );
};

export default CustomerOverview;
