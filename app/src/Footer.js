import React from "react";


function Footer(prop) {


return (
    <>
    <div className="footer">
    <p className="copy">Copyright © {prop.autor}</p>
    <p className="anio">{prop.anios}</p>
    </div>
    
    </>
    
    )


}

export default Footer