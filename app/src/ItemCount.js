import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({handleOnAdd}) => {


    const [count, setCount] = useState(0);

  
    const handleSumar = (e) => {
        console.log(e)
        console.log(e.target)
        e.stopPropagation()
        setCount(count + 1);
    }

    const handleRestar = (e) => {
        console.log(e.target)
        setCount(count - 1);
    }




    const handleConfirmar = () => { 
        handleOnAdd(count)
    }

  

    return (
        <div >
            <div className="contador">
                

            <Button className="mas" variant="outlined" color='success' size='small' onClick={handleSumar}>
                 +

               </Button>
                
                <h3 className="nro">{count}</h3>


                <Button className="menos" variant="outlined" color='success' size='small' onClick={handleRestar}>
                 -
               </Button>
              
            </div>
        
        </div>
    )

}

export default ItemCount