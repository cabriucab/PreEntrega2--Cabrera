import React from "react";
import NavBar from "./components/NavBar";
import imagelogo from "./103833634_255301082445857_6462337026877186153_n.jpg";

function Header() {

return (

<>

<header>

<div className="header__menuSuperior">
            <h1 className="menuSuperior__titulo">Pulpería Mendiolaza</h1>

            <div className="menuSuperior__menu">
                <div className="menu__logo">
                    <a href="#"><img src={imagelogo}/></a>

</div>


< NavBar/>
</div>

</div>

</header>


</>






) 

}

export default Header