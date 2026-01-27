import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color,setColor]=useState("white")
  return(
    <div>
  <h1>color-picker</h1>
  <button onClick={()=>setColor("red")}>Red</button>
  <button onClick={()=>setColor("blue")}>Blue</button>
  <button onClick={()=>setColor("green")}>Green</button>
  <button onClick={()=>setColor("black")}>black</button>
  <button onClick={()=>setColor("purple")}>purple</button>
  <div style={{height:"100px",
    width:"200px",
    border:"1px solid",
    marginLeft:"450px",
    marginTop:"20px",
    backgroundColor:color}}> 
  </div>
  </div>
  )
}
      
  


export default App
