import { useState, useEffect } from "react";
import { getUnProducto } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        
        getUnProducto(idItem)
            .then(res => { 
                setProduct(res)
        })
        .catch(err =>{
            console.error(err);
        })
    }, [/* idItem */])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;