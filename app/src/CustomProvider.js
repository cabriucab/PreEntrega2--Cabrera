import React from 'react'
import { createContext } from "react";
import { useState, useEffect } from "react";



export const contexto = createContext()
const { Provider } = contexto;


export default function CustomProvider({ children }) {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [vSumTotal, setVSumTotal] = useState(0)


    useEffect(() => {
        console.table(carrito)
        sumarCantidad()

    }, [carrito])


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
        }
    }

    

    const sumarCantidad = () => {

        const sumall = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);

        setVSumTotal(sumall);

    };


    const valorContexto = {
        carrito: carrito,
        total: total,
        agregarProducto: agregarProducto,
        setTotal: setTotal,
        vSumTotal: vSumTotal,


    }


    return (

        <Provider value={valorContexto}>

            {children}

        </Provider>
    )
}

