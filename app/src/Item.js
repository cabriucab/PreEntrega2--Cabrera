import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"



const Item = ({ id, descripcion, categoria, precio, imagen}) => {

  return (

 
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
          <Button id="botonCompra" variant="contained" color='success' size='large'>
          <Link to={`/item/${id}`} >
              Ver detalle
            </Link>

          </Button>
        </div>


      </Card>
    </div>

  )
}
export default Item



