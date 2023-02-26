import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './pizza.css'
import PizzaOrderingApp from './PizzaToppings'
import data from './data'

function App() {
  
  return (
    <div className="App">
    <PizzaOrderingApp data={data} />
    </div>
  )
}

export default App
