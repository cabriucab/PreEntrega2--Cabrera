import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productosInicialesJason from "./components/menues.json"
import ItemList from "./ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./conexionFirebase"


const ItemListContainer=() =>{

const [items, setItems] = useState([]) 

const {categoria} = useParams() 



useEffect(() => {

    const productosCollection = collection(db, "productos")

    if (categoria) {
        const filtro = query(productosCollection, where("categoria", "==", categoria))
        const consulta = getDocs(filtro)
        consulta
            .then((resultado) => {
                const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setItems(productos)
            })
            .catch((error) => {
                console.log(error)
            })

    } else {
        const consulta = getDocs(productosCollection)
        consulta
            .then((resultado) => {
                const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setItems(productos)
            })
            .catch((error) => {
                console.log(error)
            })

    }

}, [categoria])

return (
    <div>
        <h2>Productos</h2>
        {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
)

}



export default ItemListContainer