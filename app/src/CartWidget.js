


import React, { useContext } from "react";
import imgCart from "./icons8-shopping-cart-50.png"
import {Link} from "react-router-dom"
import { contexto } from "./CustomProvider";



function CartWidget() {

    const ValorContexto = useContext(contexto)


return(

    <>

    
    <div className="contenedorCarro">
    <div className="botonNro">
        <p>{ValorContexto.vSumTotal}</p>
    </div> 
    <Link to="/carrito"><img className="CartWidget" src={imgCart} alt=""></img></Link>
  
    </div>
     
    
    </>
   


)

}

export default CartWidget