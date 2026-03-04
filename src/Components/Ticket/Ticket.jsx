import React, { useState } from "react";

const Ticket = ({ ticket, inProgress, setInProgress, status, setStatus }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { id, title, description, customer, priority, createdAt } = ticket;

  const handleTicket = () => {
    // No need for a "guard clause" here because the button's
    // disabled attribute handles it for us!
    setInProgress((prev) => prev + 1);
    setStatus((prevStatus) => [...(prevStatus || []), ticket]);
    setIsSelected(true);
  };

  return (
    <button
      type="button" // Always specify type="button" to prevent form submissions
      disabled={isSelected} // This natively stops the onClick event
      onClick={handleTicket}
      className={`text-left w-full rounded-xl border p-4 shadow-sm transition-all duration-200
        ${
          isSelected
            ? "opacity-50 cursor-not-allowed bg-gray-100 dark:bg-neutral-800"
            : "bg-white dark:bg-neutral-900 cursor-pointer hover:shadow-md hover:scale-[1.002]"
        }
      `}
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <h2 className="font-semibold text-neutral-900 dark:text-white">
          {title}
        </h2>
        <span className="flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm mt-2 opacity-70 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

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
    </button>
  );
};

export default Ticket;
