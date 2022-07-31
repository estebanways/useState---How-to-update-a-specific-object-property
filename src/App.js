import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "esteban",
    email: "stv.herrera@gmail.com",
    images: ["profile.png", "cover.png"],
  });

  /* 
   * Changes the user name
   */
  const changeUser = () => {
    setUser((prev) => ({ ...prev, name: input }));
  };

  console.log(user);

  /*
   * Adds property and value
   */
  const changeUserAddNewProp = () => {
    setUser((prev) => ({ ...prev, city: "Boston" }));
  };

  return (
    <div className="App">
      <h2>User:</h2>
      <input
       onChange={(e) => setInput(e.target.value)} placeholder="Enter a new name..."
      />
      <button onClick={changeUser}>Change user name</button>{" "}
      <span>User name is: {user.name}</span>
    </div>
  );
}

export default App;
