import { useState } from "react";

export default function ItemCount ( {stock, onAdd}) {

    const [count,setCount] = useState(1);
    
    const decrement = ()=>{
        if(count > 1){
            setCount(count - 1);
        }
    }
    
    const increment = ()=>{
        if(count < stock) {
            setCount(count + 1);
        }
    }
    
    return (
        <>
            <button onClick={ increment }> - </button>
                <span> {count} </span>
            <button onClick={ decrement }> + </button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </>
    )
}