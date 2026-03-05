import React, { use, useState } from "react";
import Ticket from "../Ticket/Ticket";

const CustomerTickets = ({
  promiseTickets,
  inProgress,
  setInProgress,
  status,
  setStatus,
}) => {
  // const tickets = use(promiseTickets);
  // const [upTickets, setupTickets] = useState(tickets);
  return (
    <div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card */}
        {promiseTickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            inProgress={inProgress}
            setInProgress={setInProgress}
            status={status}
            setStatus={setStatus}
          ></Ticket>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
