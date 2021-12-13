import React, {useState} from "react"
import axios from 'axios'

export function useApplicationData () {
  const [data, setData] = useState();

  const handleGet = (param) => {
    return axios.get(`http://localhost:3000/api/${param}`).then(res => {
      setData(res.data)
    })
  }
  return { data, handleGet }
}