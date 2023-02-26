import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './survay.css'
import Survey from './Survay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Survey/>
    </div>
  )
}

export default App
