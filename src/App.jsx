import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header.jsx";
import Login, { Profile, Setting, user_id } from "./UserComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banana");
  };
  return (
    <>
      <p>{fruit}</p>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter />
    </>
  );
}

export default App;
