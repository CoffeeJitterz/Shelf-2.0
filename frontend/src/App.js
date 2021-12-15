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
  handleGetSpines(1);
}, []);
console.log(shelves[1])
dataHelper(shelves, spines)

const output = Array.isArray(shelves) && shelves.map(shelf => {
  return <Shelves
            key={shelf.id}
            shelfId={shelf.id}
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
