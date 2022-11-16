import { useState } from "react";
import { Button } from "@mui/material";
import { contexto } from './CustomProvider';
import { useContext, useEffect} from 'react';




const ItemCount = ({ handleOnAdd }) => {

    const {setTotal} = useContext(contexto)
    const [count, setCount] = useState(0);
    

    const handleSumar = (e) => {
       
        e.stopPropagation() 
        setCount(count + 1);
    }

    const handleRestar = (e) => {
      
        setCount(count - 1);
    }

 


    const handleConfirmar = () => {
        handleOnAdd(count)
    }

    
   
    useEffect(() => {
        setTotal(count)
        
    }, [count, setTotal] 
    
   
   
    
    
    
    
    
    
    )


    return (
        <div >
            <div className="contador">


                <Button className="mas" variant="outlined" color='success' size='large' onClick={handleSumar}>
                    +

                </Button>

                <h3 className="nro">{count}</h3>


                <Button className="menos" variant="outlined" color='success' size='large' onClick={handleRestar}>
                    -
                </Button>

            </div>

        </div>
    )

}

export default ItemCount