import React from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import StatusResolvedTask from "../StatusResolvedTask/StatusResolvedTask";

const CustomerOverview = ({ promiseTickets }) => {
  return (
    <div className="flex flex-col lg:flex-row max-w-300 mx-auto gap-5 py-5">
      <CustomerTickets promiseTickets={promiseTickets}></CustomerTickets>
      <StatusResolvedTask></StatusResolvedTask>
    </div>
  );
};

export default CustomerOverview;
