import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Principal from './components/Principal'

function App() {


  return (
    <div className='w-full h-full bg-white'>
      <nav>
        <Navbar/>
      </nav>

      <Principal>  //No styling on Main File :-
        <Principal/>
      </Principal>
      

    </div>
  )
}

export default App
