import { useState } from "react";
import "./App.css";

function App() {
  const [isStudent, setIsStudent] = useState(0);
  function Input({ type, placeholder }) {
    return (
      <div>
        <input type={type} placeholder={placeholder} />
      </div>
    );
  }
  return (
    <>
      <form>
        <Input type="text" placeholder="Enter your name" />
        <br />
        <input
          type="checkbox"
          id="student"
          name="student"
          value={isStudent}
          onChange={() => setIsStudent(!isStudent)}
        />

        <label htmlFor="student">Are you a student?</label>
        {isStudent ? (
          <Input type="text" placeholder="Enter you school name" />
        ) : 
        (
          <Input type="text" placeholder="Enter your company name" />
        )
        }
      </form>
    </>
  );
}

export default App;
