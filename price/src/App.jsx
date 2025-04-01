import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className='flex min-h-screen items-center justify-center min-w-screen bg-slate-800'> 
 <Home />
 </div>
  )
}

export default App
