import React, {useEffect} from "react";
import { useApplicationData} from "./hooks/useApplicationData";
import Spines from './components/Spines'
import './App.css';

function App() {
  //destructure useApplicationData
const { data, handleGet } = useApplicationData();

useEffect(() => {
  handleGet('users');
}, []);
console.log("I am data", data)
const output = Array.isArray(data) && data.map(item => {
  console.log(item.username)
  return <Spines 
            name={item.username}
          />
})
  return (
    <div className="App">
      <p>MY SITE</p>
      {output}
    </div>
  );
}

export default App;
