import React, {useEffect} from "react";
import { useApplicationData} from "./hooks/useApplicationData";
import './App.css';

function App() {
  //destructure useApplicationData
const { handleGet } = useApplicationData();

useEffect(() => {
  handleGet('users')
}, []);

  return (
    <div className="App">
      <p>MY SITE</p>
    </div>
  );
}

export default App;
