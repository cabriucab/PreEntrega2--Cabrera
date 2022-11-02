


import React from "react";
import imgCart from "./icons8-shopping-cart-50.png"
import {Link} from "react-router-dom"



function CartWidget() {



return(

    <>

    
    <div className="contenedorCarro">
    <div className="botonNro">
        <p>2</p>
    </div> 
    <Link to="/carrito"><img className="CartWidget" src={imgCart} alt=""></img></Link>
  
    </div>
     
    
    </>
   


)

}

export default CartWidget