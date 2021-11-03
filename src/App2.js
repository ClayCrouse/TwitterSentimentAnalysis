import React, { useState } from "react"
import { PieChart } from 'react-minimal-pie-chart'
import axios from 'axios'
import Button from "./components/Button"
import SearchBar from './components/SearchBar'

const App = () => {
  
  const getDataFrom = async (url) => {
    const response = await fetch(url)
    return response.json()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    axios
    .get("http://localhost:8000/")
    .then(result => console.log(result.data))
    .catch(error => console.log('error'))
  }

  return (
    <div>

      <button onClick={handleSubmit}>Submit</button>
      
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <SearchBar url="http://localhost:8000/query"/>
  
      <PieChart radius={20}
        data={[
          { title: 'One', value: 40, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]} 
      />

      <form action="http://localhost:8000/" method="post">
        <label htmlFor="firstname">First Name:</label>
        <input type="text" name="firstname" id="firstname" />
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>

      <button
        onClick={async () => {
          console.log(await getDataFrom('http://localhost:8000/add'))
        }}
      >
        Log data from server
      </button>

    </div>
  )
}

export default App;
