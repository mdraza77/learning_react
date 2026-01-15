import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header.jsx";
import Login, { Profile, Setting, user_id } from "./UserComponent.jsx";

function App() {
  const myName = "Md Raza";
  let myAge = 20;

  let profile_img = "public\\profile-img.png";

  function sum(a, b) {
    return a + b;
  }

  return (
    <>
      <Header />
      <p>My name is {myName} and age is {myAge}</p>
      <p>Sum of a and b is {sum(10, 20)}</p>
      <input type="text" value={myName} />
      <img className="profile-image" src={profile_img} alt="Profile" />
    </>
  );
}

export default App;
