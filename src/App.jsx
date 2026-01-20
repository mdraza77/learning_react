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
import Props from "./Props.jsx";
import Wrapper from "./Wrapper.jsx";

function App() {
  const [student, setStudent] = useState("Md Raza");
  return (
    <div className="py-10 px-10 rounded-sm border bg-gray-400">
      {/* {student && <Student name={student} />}
      <Props name="Md Raza" />
      <Props /> */}
      <Wrapper>
        <p>Wrapper</p>
      </Wrapper>
      <Wrapper>
        <p>Wrapper</p>
      </Wrapper>
    </div>
  );
}

export default App;
