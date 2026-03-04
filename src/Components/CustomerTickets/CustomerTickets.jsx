import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const CustomerTickets = ({ promiseTickets }) => {
  const tickets = use(promiseTickets);
  return (
    <div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card */}
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket}></Ticket>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
