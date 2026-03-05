1️ What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax that allows you to write HTML-like code inside JavaScript. It is mainly used in React to describe the UI.

Why it is used:

- Makes UI code easier to write
- Looks similar to HTML, so it is more readable
- Allows using JavaScript logic inside UI

Example:

```jsx
const element = <h1>Hello World</h1>;
```

---

2️ What is the difference between State and Props?

Props=>
Data passed from parent component
Read-only (cannot be modified by child)
Used to pass data between components

State=>
Data managed inside the component
Can be updated
Used to manage and update UI

---

3️ What is the useState hook, and how does it work?

useState is a React Hook that allows functional components to have state.

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

How it works:

count → current state value
setCount → function to update the state
useState(0) → initial state value

---

4️ How can you share state between components in React?

State can be shared using Lifting State Up.
This means moving the shared state to a common parent component and passing it to child components using props.

Example:

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child1 count={count} />
      <Child2 setCount={setCount} />
    </>
  );
}
```

---

5️ How is event handling done in React?

Event handling in React is done using camelCase event names and passing a function as the event handler.

Example:

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click</button>;
}
```

Common events:
onClick
onChange
onSubmit
onMouseOver
