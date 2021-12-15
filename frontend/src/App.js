import React, {useEffect} from "react";
import { useApplicationData} from "./hooks/useApplicationData";
import { dataHelper } from "./helpers/dataHelper";
import Spines from './components/Spines';
import Shelves from './components/Shelves';
import './App.css';

function App() {
  //destructure useApplicationData
const { shelves, spines, handleGetShelves, handleGetSpines } = useApplicationData();

useEffect(() => {
  handleGetShelves(1);
}, []);
useEffect(() => {
  handleGetSpines(1)
}, []);

dataHelper(shelves)
const output = Array.isArray(shelves) && shelves.map(shelf => {
  return <Shelves
            name={shelf.name}
            color={shelf.color}
            font={shelf.font}
            spines={spines}
          />
})
  return (
    <div className="App">
      {output}
    </div>
  );
}

export default App;
