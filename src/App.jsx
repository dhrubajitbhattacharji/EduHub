// import React, {useState} from 'react';\

import { BottomNav } from "./components/BottomNav"
import { Navbar } from "./components/NavBar"
import { Home } from "./pages/home/home"

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
     <BottomNav/>
    </>
  )
}

export default App