import React, {useEffect, useState} from "react";
import axios from 'axios';
import { dataHelper } from "./helpers/dataHelper";
import Spines from './components/Spines';
import Shelves from './components/Shelves';
import './App.css';

function App() {
  //destructure useApplicationData

const [shelves, setShelves] = useState('shelves');
const [spines, setSpines] = useState('spines');
useEffect(() => {
  const user_id = 1;
  axios.get(`http://localhost:3000/api/shelves/${user_id}`).then(res => {
    setShelves(res.data);
    console.log(shelves);
    axios.get(`http://localhost:3000/api/spines/${user_id}`).then(res => {
      setSpines(res.data);
      console.log(spines);
    });
  })
}, []);
const shelfBuilder = (array1, array2) => {
  console.log(array1[1]);
  console.log(array2[1]);
  const output = [];
  array1.map(item => output.push(item))
  console.log("output",output)
};
useEffect(() => {
  shelfBuilder(spines, shelves)
}, [setSpines])

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
