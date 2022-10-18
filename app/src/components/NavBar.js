


import React from "react";
import CartWidget from "./CartWidget"
import ImagenHamb from "./icons8-menu-24.png"

function NavBar() {



return(
<>
    <nav className="menu__navegador">
    <label for="menu" id="menu_btn">
    <img src={ImagenHamb}/>
  </label>
  <input type="checkbox" id="menu"></input>
              

    <ul className="navegador__itemsDeMenu">
        <li className="itemsDeMenu__link"> <a href="#">Home</a></li>
        <li className="itemsDeMenu__link"> <a href="#">Quienes Somos</a></li>
        <li className="itemsDeMenu__link"> <a href="#">Delivery & Takeaway</a></li>
        <li className="itemsDeMenu__link"> <a href="#">Nuestras Creaciones</a>
            <ul className="sub-menu-carta">
                <li className="sub-link"><a href="#">Carnes </a></li>
                <li className="sub-link"><a href="#">Pastas </a></li>
                <li className="sub-link"><a href="p#">Pescados </a></li>
                <li className="sub-link"><a href="#">Lomos y pizzas</a></li>
            </ul>

        </li>
        <li className="itemsDeMenu__link"> <a href="#">Nuestras Delicatessen</a></li>
        <li className="itemsDeMenu__link"> <a href="#">Carta</a></li>
        <li className="itemsDeMenu__link"> <a href="#">Reservas</a></li>

    </ul>
</nav>

<CartWidget/>

</>


)

}

export default NavBar