import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from "firebase/firestore";
import {data} from '../../services/config';
import ItemList from '../ItemList/ItemList';

const useFetchProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsRef = category ? query(collection(data, "products"), where("category","==",category)): collection(data, "products");
                const snapshot = await getDocs(productsRef);
                if(snapshot.size === 0){
                    console.log("No results");
                }

                setProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() } )));
                setLoading(false);
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        fetchData();
    }, [category]);

    return { products, loading };
}

const ItemListContainer = () => {
    const { category } = useParams();
    const { products, loading } = useFetchProducts(category);

    return loading ? <h2>Cargando...</h2> : <ItemList productos={products} />;
}

export default ItemListContainer