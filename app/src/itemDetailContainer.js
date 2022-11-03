import ItemDetail from "./ItemDetail"
import productosInicialesJason from "./components/menues.json"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material"

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    const { id } = useParams()




    const ObtenerProductoId = (ids) => {

        let obtencionArticulo = new Promise((res) => {
            setTimeout(() => {
                res(productosInicialesJason.filter(item => item.id == ids))
              
            
            
            }, 2000)
        })

        return obtencionArticulo
    }


    useEffect(() => {

        ObtenerProductoId(id)
            .then(res => {
               
                setItems(res)


            })
            .catch(err => {
                console.log(err)
            })


    }, [id])


    return (
        <>
         
            {
                 
                items.map((item) => {
                    return <ItemDetail key={item.id} {...item} /> 
                })

            }



        </>



    )
}


export default ItemDetailContainer