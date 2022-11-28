
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { db } from "./conexionFirebase"
import './estiloCarro.scss'
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import { TextField } from './TextField'
import * as Yup from 'yup';
import { Link } from "react-router-dom"
import './estiloCarro.scss'


const Checkout = () => {


    const valorDelContexto = useCarrito()
    const [id, setId] = useState("")



    const validate = Yup.object({
        nombre: Yup.string()
            .max(30, 'Debe tener menos de 30 Caracteres')
            .required('Requerido'),
        telefono: Yup.string()
            .max(20, 'Debe ingresar solo numeros')
            .required('Requerido'),
        email: Yup.string()
            .email('Email es Invalido')
            .required('Email es requerido'),
        confirmaMail: Yup.string()
            .oneOf([Yup.ref('email'), null], 'Los email no coinciden')
            .required('Email es requerido'),
    })




    const insert = (values) => {



        const orden = {
            buyer: {
                Nombre: values.nombre,
                Telefono: values.telefono,
                Email: values.email,
            },
            products: valorDelContexto.carrito,
            total: valorDelContexto.SumaPrecios,
            date: serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection, orden)

        consulta
            .then((docRef) => {
                setId(docRef.id)

            })
            .then((error) => {
                console.log(error)
            })



        Confirmacion1()


    }


    const Confirmacion1 = () => {

        valorDelContexto.vaciarCarrito()

    }



    return (


        <div className="Container" >
            <h2 id="titulo">Confirmación de compra</h2>

            <Formik
                initialValues={{
                    nombre: '',
                    telefono: '',
                    email: '',
                    confirmaMail: ''
                }}
                validationSchema={validate}
                onSubmit={values => {

                    insert(values)
                }}
            >
                {formik => (
                    <div id="formCheck">

                        <Form>
                            <div className="itemLabel">
                                <TextField label="Nombre y apellido" name="nombre" type="text" />
                            </div>
                            <div className="itemLabel">
                                <TextField label="Telefono" name="telefono" type="number" />
                            </div>

                            <div className="itemLabel">
                                <TextField label="Email" name="email" type="email" />
                            </div>
                            <div className="itemLabel">
                                <TextField label="Confirmar Email" name="confirmaMail" type="email" />
                            </div>
                            <div className="botones">
                                <Button id="botonCompra" className="botonCompra1" variant="contained" color='success' size='large' type="submit">FINALIZAR</Button>

                                <Button id="botonCompra" variant="contained" className="botonCompra1" color='error' size='large' type="reset" onClick={{ Confirmacion1 }}>
                                    <Link to={`/Productos`}>
                                        CANCELAR COMPRA
                                    </Link>
                                </Button>
                            </div>

                        </Form>


                        <Button id="botonCompra" variant="contained" color='warning' size='large'>
                            <Link to={`/Productos`}  >
                                SEGUIR COMPRANDO
                            </Link>
                        </Button>


                    </div>
                )}
            </Formik>

            {id ? <h1>Orden generada con exito, el id de su compra es:  {id}</h1> : null}


        </div>








    )
}

export default Checkout