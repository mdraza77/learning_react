import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header.jsx";
import Login, { Profile, Setting, user_id } from "./UserComponent.jsx";
import Counter from "./Counter.jsx";
import User from "./User.jsx";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banana");
  };
  const [display, setDisplay] = useState(true);
  return (
    <>
      <p>{fruit}</p>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter />
      {/* {display ? <p>Hi, This is Md Raza</p> : null} */}
      {/* {display ? <p>Hi, This is Md Raza</p> : <p>Not Available</p>} */}
      {display ? <User /> : <p>Not Available</p>}
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    </>
  );
}

export default App;
