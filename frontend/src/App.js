import React, {useEffect} from "react";
import { useApplicationData} from "./hooks/useApplicationData";
import Spines from './components/Spines'
import './App.css';

function App() {
  //destructure useApplicationData
const { shelves, handleGetShelves } = useApplicationData();

useEffect(() => {
  handleGetShelves(1);
}, []);
const output = Array.isArray(shelves) && shelves.map(shelf => {
  return <Spines 
            name={shelf.name}
            color={shelf.color}
            font={shelf.font}
          />
})
  return (
    <div className="App">
      {output}
    </div>
  );
}

export default App;
