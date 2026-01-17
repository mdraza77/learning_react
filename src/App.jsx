import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header.jsx";
import Login, { Profile, Setting, user_id } from "./UserComponent.jsx";
import Counter from "./Counter.jsx";
import User from "./User.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      {count == 0 ? (
        <p>Hi</p>
      ) : count == 1 ? (
        <p>Hello</p>
      ) : count == 2 ? (
        <p>How are you</p>
      ) : (
        <p>Ok</p>
      )}
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  );
}

export default App;
