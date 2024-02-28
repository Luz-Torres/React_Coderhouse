import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {data} from '../../services/config';
import {getDoc, doc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const newDoc = doc(data, "products", id);

        getDoc(newDoc)
            .then(res => { 
                const data =res.data();
                const newProduct = {id: res.id, ...data}
                setProduct(newProduct);
        })
        .catch(err =>{
            console.error(err);
        })
    }, [ idItem ])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;