import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from "./Carrito"
import ItemListContainer from './ItemListContainer';


export default function Main() {
  return (
   <main>
    <Routes>

    <Route path='/' element={<Home/>}/>
                
                <Route path="/productos" element={<ItemListContainer/>}/>

                <Route path="/productos/:categoria"  element={<ItemListContainer/>}/>
                
                <Route path='/carrito' element={<Carrito/>}/>

                <Route path='*' element={<h1>404</h1>}/>


    </Routes>


   </main>
    


  )
}
