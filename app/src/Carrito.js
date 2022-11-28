
import { useCarrito } from "./CustomProvider"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './estiloCarro.scss'
import { Hidden } from "@mui/material";

const Carrito = () => {
  
   
    const valorDelContexto = useCarrito()


    return (
        <>
            <h2 id="titulo">Resumen de pedido</h2>
           <div className="Principal">
           
        <table className="table">
          <thead>
            <tr>
            <th></th>
              <th>CATEGORIA</th>
              <th>DESCRIPCION</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
             

            </tr>
          </thead>
          <tbody>
            {valorDelContexto.carrito.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td ><img id="imagenCarro" src={user.imagen} alt=""></img></td>
                  <td>{user.categoria}</td>
                  <td>{user.descripcion}</td>
                  <td>$ {user.precio}</td>
                  <td>{user.cantidad}</td>
                  
                </tr>
              );
            })}
            
  

          </tbody>
        
        </table>
        <table>
 
  <tr>
    <td id="base"><h3 className="Total">TOTAL A ABONAR      $ {valorDelContexto.SumaPrecios}</h3></td>
  </tr>
</table>
    
      </div>
      
      <Button id="botonCompra" variant="contained" color='success' size='large'>
          <Link to={`/Checkout`} >
             FINALIZAR COMPRA
            </Link>
            </Button>
            <Button id="botonCompra" variant="contained" color='warning' size='large'>
          <Link to={`/Productos`} >
           SEGUIR COMPRANDO
            </Link>
            </Button>
</>
     


    )
}

export default Carrito