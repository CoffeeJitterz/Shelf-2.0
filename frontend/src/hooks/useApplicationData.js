import React, {useState} from "react"
import axios from 'axios'

export function useApplicationData () {
  const [shelves, setShelves] = useState();

  const handleGetShelves = (user_id) => {
    return axios.get(`http://localhost:3000/api/users/${user_id}/shelves`).then(res => {
      setShelves(res.data)
    })
  }
  return { shelves, handleGetShelves }
}