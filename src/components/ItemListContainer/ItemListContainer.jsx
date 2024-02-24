import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {getFirestore, collection, getDocs} from "firebase/firestore";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {


        const data = getFirestore();

        //PARA TRAER TODOS LOS PRODUCTOS DE FIREBASE
        const productsRef = collection(data, "products");
        
        getDocs(productsRef).then((snapshot) => {
            if(snapshot.size === 0){
                console.log("No results");
            }

            setProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() } )));
        });
    }, []);

    return (
        <ItemList productos={products} />
    );
}

export default ItemListContainer