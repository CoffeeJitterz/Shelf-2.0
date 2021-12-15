import React, {useState} from "react"
import axios from 'axios'

export function useApplicationData () {
  const [shelves, setShelves] = useState();
  const [spines, setSpines] = useState();

  const handleGetShelves = (user_id) => {
    return axios.get(`http://localhost:3000/api/shelves/${user_id}`).then(res => {
      setShelves(res.data)
    })
  }

  const handleGetSpines = (user_id) => {
    return axios.get(`http://localhost:3000/api/spines/${user_id}`).then(res => {
      setSpines(res.data)
    })
  }
  return { shelves, spines, handleGetShelves, handleGetSpines }
}