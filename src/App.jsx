import { Suspense } from "react";
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
  return (
    <>
      <InProgressResolved></InProgressResolved>
      <Suspense fallback={"Loading..."}>
        <CustomerOverview promiseTickets={promiseTickets}></CustomerOverview>
      </Suspense>
    </>
  );
}

export default App;
