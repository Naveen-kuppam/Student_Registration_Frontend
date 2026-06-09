import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Student_Registration from './Student Regisration'
import Navbar from './Navbar'
import Home from './Home'
import Attendance from './Attendance'
import Fees from './Fees'

function App() {
  const [count, setCount] = useState(0)
  return (
      <div>
        <Login/>
        <Student_Registration/>
        <Navbar/>
        <Home/>
        <Attendance/>
        <Fees/>
        
       </div>
    
  )
}

export default App
