import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User.jsx";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-blue-500 rounded">
        <div></div>
        <form action="" method="get">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="py-2 px-4 border rounded outline-none"
            type="text"
            placeholder="Enter Name"
          />
          <p className="text-white">{name}</p>
          <br /> <br />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="py-2 px-4 border rounded outline-none"
            type="email"
            placeholder="Enter Email"
          />
          <p className="text-white">{email}</p>
          <br /> <br />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="py-2 px-4 border rounded outline-none"
            type="password"
            placeholder="Enter Password"
          />
          <p className="text-white">{password}</p>
          <br /> <br />
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Submit
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => {
                setName("");
                setEmail("");
                setPassword("");
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
