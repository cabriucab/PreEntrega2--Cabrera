import ItemDetail from "./ItemDetail"
import { collection, doc, getDoc } from "firebase/firestore"
import {db} from "./conexionFirebase"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    const { id } = useParams()




    useEffect(()=>{
        const productosCollection = collection(db, "productos")
        const refe = doc(productosCollection, id) 
        const consulta = getDoc(refe)

        consulta
        .then(res=>{
            setItems(res.data())
           
          
        })
        .catch(error=>{
            console.log(error)
        })
    })



    return (
        <>
         
          
                 
               <ItemDetail key={id} {...items} /> 
           

          



        </>



    )
}


export default ItemDetailContainer