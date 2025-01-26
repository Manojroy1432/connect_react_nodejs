import React, { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log("Error hai vai" , error)
    })
  },[jokes])
  return (
    <div>
      <h1>This is a heading</h1>
      <p>this is a paragraph tag</p>
      <p>jokes length {jokes.length}</p>
      {
      jokes.map((joke)=>{
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.desc}</p>
        </div>
      })
      }
    </div>
  )
}

export default App