import { Suspense, use, useState } from "react";
import "./App.css";
import CustomerOverview from "./Components/CustomerOverview/CustomerOverview";
import InProgressResolved from "./Components/InProgress_Resolve/InProgressResolved";

// load Customer Tickets
const loadTicketsURL = "/tickets.json";
const loadTicketsData = async () => {
  const res = await fetch(loadTicketsURL);
  return res.json();
};

const allTickets = loadTicketsData();
loadTicketsData();
function App() {
  // display Tickets in customer tickets an store a state name promiseTickets
  const tickets = use(allTickets);
  const [promiseTickets, setpromiseTickets] = useState(tickets);
  const deleteTicketToCustomer = (getTicket) => {
    const newPromiseTickets = promiseTickets.filter(
      (promise) => promise.id !== getTicket.id,
    );
    setpromiseTickets(newPromiseTickets);
  };
  // create state for In-Progress
  const [inProgress, setInProgress] = useState(0);
  const [resolvedProgress, setResolvedProgress] = useState(0);
  return (
    <>
      <InProgressResolved
        inProgress={inProgress}
        resolvedProgress={resolvedProgress}
      ></InProgressResolved>
      <Suspense fallback={"Loading..."}>
        <CustomerOverview
          deleteTicketToCustomer={deleteTicketToCustomer}
          resolvedProgress={resolvedProgress}
          setResolvedProgress={setResolvedProgress}
          inProgress={inProgress}
          setInProgress={setInProgress}
          promiseTickets={promiseTickets}
        ></CustomerOverview>
      </Suspense>
    </>
  );
}

export default App;
