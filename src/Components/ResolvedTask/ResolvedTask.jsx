import React from "react";

const ResolvedTask = ({ resolvedTask }) => {
  return (
    <div className="m-1">
      <h2 className="bg-[#E0E7FF] text-[#001931] py-2">{resolvedTask.title}</h2>
    </div>
  );
};

export default ResolvedTask;
