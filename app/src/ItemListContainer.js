import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productosInicialesJason from "./components/menues.json"
import ItemList from "./ItemList"





const ItemListContainer=() =>{

const [items, setItems] = useState([]) 

const {categoria} = useParams() 



const ObtenerProducto = () => {

    let simulacionPedido = new Promise((res) => {
        setTimeout(() => {
            res(productosInicialesJason)
        }, 2000)
    })

    return simulacionPedido
}

const ObtenerProductoId = (id) => {
    
    let simulacionPedido = new Promise((res) => {
        setTimeout(() => {
            res(productosInicialesJason.filter(item=>item.categoria == id))
        }, 2000)
    })

    return simulacionPedido
}




useEffect(() => {

    if(categoria){

        ObtenerProductoId(categoria) 
        .then(res => {
            setItems(res)
            
        })
        .catch(err => {
            console.log (err)
        })

    }else{

        ObtenerProducto()
        .then((res) => {
            setItems(res)
        })
        .catch((error) => {
            console.log (error)
        })
    }

}, [categoria])

return (
    <div>
        <h2 className="tituloProductos">Productos</h2>
        
        {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
  
)

}


export default ItemListContainer