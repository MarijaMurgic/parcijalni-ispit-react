import { useState, useEffect } from "react";
import Ispis from "./Ispis";

function App() {

  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const [userValue, setUserValue] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/facebook`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserValue(data);
      })
  }, []); 

  const [listRepos, setListRepos] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/facebook/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListRepos(data);
      })
  }, []); 

  const handleReset = () => {
    setInputValue([]);
    setListRepos([]);
  }

  return (
    <div>
      <form>
        <label>GitHub username:</label>
        <input type="text" onChange={handleInputValue} value={inputValue}/>
        <button type="submit">GO!</button>
        {listRepos && <Ispis 
          userValue={userValue} 
          listRepos={listRepos} 
          handleReset={handleReset}       
        /> }
      </form>
    </div>
  );
}

export default App;
