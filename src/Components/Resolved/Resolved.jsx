import React from "react";

const Resolved = ({ resolvedProgress }) => {
  return (
    <div className="bg-green-600 w-177 flex flex-col gap-3 items-center justify-center py-20">
      <p>Resolved</p>
      <h1 className="font-bold text-5xl">{resolvedProgress}</h1>
    </div>
  );
};

export default Resolved;
