import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './components/Principal';
import App from './App';
import { Comprar } from './Comprar';
import Dataform from '../Dataform';
import Revisar from './Revisar';
import Presentation from './Presentation';
export default function Routers() {
  return (
    <>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/comprar/:movieId' element={<Comprar/>}/>
      <Route path='/dataForm/' element={<Dataform/>}/>
      <Route path='/revisar/' element={<Revisar/>}/>
      <Route path='/p/' element={<Presentation/>}/>
    </Routes>
    </>
    
  )
}
