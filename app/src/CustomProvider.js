import React from 'react'
import { useState, useEffect } from "react";
import { createContext, useContext } from "react"


export const contexto = createContext()
const { Provider } = contexto;





export const useCarrito = () => {
    return useContext(contexto)
}


export default function CustomProvider({ children }) {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [vSumTotal, setVSumTotal] = useState(0)
    const [SumaPrecios,setSumaPrecios]= useState(0)


    useEffect(() => {
       
        sumarCantidad()

    }, [carrito])

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setSumaPrecios(0)
    }




    const agregarProducto = (producto, cantidad) => {
        const inCart = carrito.find((productoInCart) => productoInCart.id === producto.id)
        if (inCart) {
            setCarrito(carrito.map((productoInCart) => {
                if (productoInCart.id === producto.id) {
                    return { ...inCart, cantidad: inCart.cantidad + cantidad }
                } else return productoInCart
            }))
        } else {
            setCarrito([...carrito, { ...producto, cantidad: cantidad }])

           
          // setCantidadTotal(cantidadTotal + cantidad)

        }
        setSumaPrecios(SumaPrecios+producto.precio * cantidad)
    }



    const sumarCantidad = () => {

        const sumall = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);

        setVSumTotal(sumall);

    };


    const isInCart = (id) => {
        //return true o false
        return { inCart: false, item: {}, index: 0 }
    }


    const valorContexto = {
        carrito: carrito,
        total: total,
        agregarProducto: agregarProducto,
        setTotal: setTotal,
        vSumTotal: vSumTotal,
        vaciarCarrito: vaciarCarrito,
        SumaPrecios: SumaPrecios,

    }


    return (

        <Provider value={valorContexto}>

            {children}

        </Provider>
    )
}

