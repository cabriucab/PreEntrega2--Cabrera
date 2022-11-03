
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';


const ItemDetail = ({ id, descripcion, categoria, precio, imagen }) => {

   return (

 

      <div className='contenedorDetalle'>
     <h1>DETALLE DE PRODUCTO</h1>
     
      <div className='carta'>
         <Card sx={{ maxWidth: 345 }}>
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
               <Button variant="contained" color='success' size='large'>
                  Comprar

               </Button>
               <ItemCount/>
            </div>


         </Card>
      </div>
      </div>




   )
}

//paso 2 ) el comp hijo recibe el callback como prop


export default ItemDetail