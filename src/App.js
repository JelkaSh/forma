import './App.css';
import { useState } from "react";
import Korisnici from './component/Korisnici';

function App() {
  const [user, setUser] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      if (response.ok) {
        const userData = await response.json();
        setUser([userData]);
        console.log(userData);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error occurred while fetching user data", error);
    }
  };

  const handleButtonClick = () => {
    if (inputValue) {
      fetchData();
      setInputValue("");
    }
  };
  return (
    <div className="App">
      <h1>GitHub username:</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Unesi korisničko ime"
      ></input>
      <br></br>
      <button onClick={handleButtonClick}>Pretraži!</button>
      <hr></hr>
      <h1>
        <u>Profili</u>
      </h1>
      <hr></hr>
      {user.map((user) => (
        <Korisnici user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
