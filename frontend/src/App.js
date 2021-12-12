import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState('default')
  axios.get(`http://localhost:3000/api/users/1/shelves`).then (res => {
    console.log(res.data)
    setState(res)
  })
  return (
    <div className="App">
      <p>MY SITE</p>
      {state}
    </div>
  );
}

export default App;
