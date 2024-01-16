import { useState } from 'react'
import './App.css'
import CollatzVisualize from './components/CollatzVisualize'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col px-4 sm:px-[100px] gap-4 md:8 overflow-hidden'>
      <h1 className='text-center text-lg font-bold mt-3'>Collatz Conjecture Visualization</h1>
      <CollatzVisualize/>
    </div>
  )
}

export default App
