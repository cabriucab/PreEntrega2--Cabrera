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


    const addProductToCart = (product, number) => {
        const inCart = carrito.find((productInCart) => productInCart.id === product.id)
        if (inCart) {
            setCarrito(carrito.map((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, cantidad: inCart.cantidad + number }
                } else return productInCart
            }))
        } else {
            setCarrito([...carrito, { ...product, cantidad: number }])
        }
    }

    const updateProductFromCart = (product) => {
        const inCart = carrito.find((productInCart) => productInCart.id === product.id)
        if (inCart.cantidad === 1) {
            setCarrito(carrito.filter((productInCart) => productInCart.id !== product.id))
        } else {
            setCarrito((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, cantidad: inCart.cantidad - 1 }
                } else return productInCart
            })
        }
    }

    const sumarCantidad = () => {

        const sumall = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);

        setVSumTotal(sumall);

    };


    const valorContexto = {
        carrito: carrito,
        total: total,
        addProductToCart: addProductToCart,
        updateProductFromCart: updateProductFromCart,
        setTotal: setTotal,
        vSumTotal: vSumTotal,


    }


    return (

        <Provider value={valorContexto}>

            {children}

        </Provider>
    )
}

