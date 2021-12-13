import React, {useEffect} from "react";
import { useApplicationData} from "./hooks/useApplicationData";
import './App.css';

function App() {
  //destructure useApplicationData
const { data, handleGet } = useApplicationData();

useEffect(() => {
  handleGet('users');
}, []);
console.log("I am data", data)
const output = Array.isArray(data) && data.map(item => {
  
})
  return (
    <div className="App">
      <p>MY SITE</p>
    </div>
  );
}

export default App;
