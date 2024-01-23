import { useState } from "react";
const ItemCount = () => {

    const [contador,setContador] = useState(1);
    
    let stock = 7;
    
    const restar = ()=>{
        if(contador > 1){
            setContador(contador - 1);
        }
    }
    
    const sumar = ()=>{
        if(contador < stock) {
            setContador(contador + 1);
        }
    }
    
    return (
        <>
            <button onClick={ restar }> - </button>
                <p> {contador} </p>
            <button onClick={ sumar}> + </button>
        </>
    )
}

export default ItemCount;