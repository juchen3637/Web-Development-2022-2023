import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import data from "./data"

function App() {
  const cards = data.map (item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className='card--list'>
        {cards}
      </section>
    </div>
  )
}

export default App
