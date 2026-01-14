import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Name />
    </>
  );
}

function Name() {
  return (
    <div>
      <h1>Md Raza</h1>
    </div>
  );
}

export default App;
