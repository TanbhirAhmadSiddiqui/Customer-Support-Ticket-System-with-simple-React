import React from "react";
import InProgress from "../InProgress/InProgress";
import Resolved from "../Resolved/Resolved";

const InProgressResolved = ({ inProgress, resolvedProgress }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-300 mx-auto gap-5 py-5">
      <InProgress inProgress={inProgress}></InProgress>
      <Resolved resolvedProgress={resolvedProgress}></Resolved>
    </div>
  );
};

export default InProgressResolved;
