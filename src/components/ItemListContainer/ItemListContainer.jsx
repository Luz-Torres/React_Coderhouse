import React from 'react';
import { useState, useEffect } from 'react';
import { getProductos } from '../asyncmock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer