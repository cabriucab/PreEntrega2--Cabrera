

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { contexto } from './CustomProvider';
import { useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import './estiloCarro.scss';


const ItemDetail = ({ ids, descripcion, categoria, precio, imagen }) => {

const {agregarProducto, total} =useContext(contexto)
const {id }= useParams()


   return (

 
    

      <div className='contenedorDetalle'>
     <h1>DETALLE DE PRODUCTO</h1>
     
      <div className='carta'>
         <Card sx={{ maxWidth: 250 }}>
            <CardMedia
               component="img"
               height="250"
               image={imagen}
               alt="menu"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {descripcion}
               </Typography>
               <Typography gutterBottom variant="h2" component="div">
                  ${precio}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {categoria}
               </Typography>
            </CardContent>

            <div className='botonCard'>
            <div className="btnComrar">
            <Button onClick={() => {agregarProducto({ id, descripcion, categoria, precio, imagen}, total)}} variant="contained" color='success' size='large'>
                 AGREGAR A CARRITO

               </Button> 
            </div>
            
            <div>
            <ItemCount />
            </div>
              
              
            </div>

            <div className="btnVolver">
<Button variant="contained" color='warning' size='large'>
<Link className='link' to={`/productos`} >
SEGUIR COMPRANDO
</Link>

</Button>
  
</div>
         </Card>
      </div>
      </div>




   )
}



export default ItemDetail