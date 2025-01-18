import "./App.css";
import { useState } from "react";
function App() {
  function Input({ type, placeholder , autoFocus}) {
    return (
      <div>
        <input type={type} placeholder={placeholder}  autoFocus={autoFocus}/>
      </div>
    );
  }

  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(!focus);
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <Input type="email" placeholder="Enter your email" autoFocus={focus} key="email" />
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password:</label>
          <Input type="password" placeholder="Enter your password" />
        </div>
        <br/>
        <div>
          <button type="button" onClick={handleFocus}>Submit</button> 
        </div>
      </form>
    </>
  );
}

export default App;
