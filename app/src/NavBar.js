


import React from "react";
import CartWidget from "./CartWidget"
import ImagenHamb from "./icons8-menu-24.png"
import {Link} from "react-router-dom"

function NavBar() {



return(
<>
    <nav className="menu__navegador">
    <label for="menu" id="menu_btn">
    <img src={ImagenHamb}/>
  </label>
  <input type="checkbox" id="menu"></input>
              

    <ul className="navegador__itemsDeMenu">
        <li className="itemsDeMenu__link"> <Link to="/ ">Home</Link></li>
        <li className="itemsDeMenu__link"> <Link to="/productos">Productos</Link>
            <ul className="sub-menu-carta">
            <li className="sub-link"><Link to="/productos">TODOS </Link></li>
                <li className="sub-link"><Link to="/productos/CARNES">Carnes </Link></li>
                <li className="sub-link"><Link to="/productos/PASTAS">Pastas </Link></li>
                <li className="sub-link"><Link to="/productos/PESCADOS">Pescados </Link></li>
                
            </ul>

        </li>
    </ul>
</nav>

<CartWidget/>

</>


)

}

export default NavBar