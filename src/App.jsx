import { Suspense, useState } from "react";
import "./App.css";
import CustomerOverview from "./Components/CustomerOverview/CustomerOverview";
import InProgressResolved from "./Components/InProgress_Resolve/InProgressResolved";

// load Customer Tickets
const loadTicketsURL = "/tickets.json";
const loadTicketsData = async () => {
  const res = await fetch(loadTicketsURL);
  return res.json();
};

const promiseTickets = loadTicketsData();
loadTicketsData();
function App() {
  // create state for In-Progress
  const [inProgress, setInProgress] = useState(0);
  return (
    <>
      <InProgressResolved inProgress={inProgress}></InProgressResolved>
      <Suspense fallback={"Loading..."}>
        <CustomerOverview
          inProgress={inProgress}
          setInProgress={setInProgress}
          promiseTickets={promiseTickets}
        ></CustomerOverview>
      </Suspense>
    </>
  );
}

export default App;
