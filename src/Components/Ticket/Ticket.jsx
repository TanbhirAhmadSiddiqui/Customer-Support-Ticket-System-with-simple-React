import React from "react";

const Ticket = ({ ticket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <div className="rounded-xl shadow-sm border p-4 bg-white dark:bg-neutral-900">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <h2 className="font-semibold">{title}</h2>

        <span
          className="flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full 
                             bg-green-100 text-green-700 
                             dark:bg-green-900/40 dark:text-green-400"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm mt-2 opacity-70">{description}</p>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4 text-sm opacity-70">
        <div>
          <span>#{id}</span>
          <span className="text-red-500 font-medium ml-2">
            {priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span>{customer}</span>
          <span className="flex items-center gap-1">📅 {createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
