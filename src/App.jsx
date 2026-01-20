import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User.jsx";

function App() {
  const [student, setStudent] = useState("Md Raza");
  const [input, setInput] = useState();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-blue-500">
        <input
          onChange={(event) => setInput(event.target.value)}
          className="py-2 px-4 border rounded outline-none"
          type="text"
          placeholder="Enter Name"
        />
        <p className="text-white">{input}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setInput()}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
