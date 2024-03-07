import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUnProducto } from "../asyncmock";
import LoaderCuber from "../LoaderCube/LoaderCube";
import {data} from '../../services/config';
import {getDoc, doc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newDoc = doc(data, "products", id);
                const res = await getDoc(newDoc);
                const data = res.data();
                const newProduct = { id: res.id, ...data };
                setProduct(newProduct);
                setLoading(false);
            } catch (err) {
                console.error(err);
                try {
                    const res = await getUnProducto(id);
                    setProduct(res);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [id]);
    
    return (
        loading ? <LoaderCube/>  : <ItemDetail products={products} />
    )

}

export default ItemDetailContainer;
