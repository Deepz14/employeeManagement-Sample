import { useState } from 'react'
import './App.css'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App ml-5'>
        <Body />
    </div>
  )
}

export default App
