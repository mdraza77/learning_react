import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header.jsx";
import Login, { Profile, Setting, user_id } from "./UserComponent.jsx";

function App() {
  const myName = "Md Raza";

  return (
    <>
      <Header />
      <Name />
      <Login />
      <Profile />
      <Setting />
      <h1>
        My name is {myName} and user_id is {user_id}
      </h1>
      <h1>{10 + 20}</h1>
      <button onClick={() => alert("Hello")}>Click</button>
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
