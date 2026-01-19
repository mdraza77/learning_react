import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header.jsx";
import Login, { Profile, Setting, user_id } from "./UserComponent.jsx";
import Counter from "./Counter.jsx";
import User from "./User.jsx";
import Names from "./Names.jsx";
import Student from "./Student.jsx";

function App() {
  const [student, setStudent] = useState();
  return <>{student && <Student name={student} />}</>;
}

export default App;
