import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { getUnProducto } from "../asyncmock";
import LoaderCuber from "../LoaderCube/LoaderCube";
import { data } from '../../services/config';
import { getDoc, doc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newDoc = doc(data, "products", id);
                const res = await getDoc(newDoc);
                const productData = res.data();
                const newProduct = { id: res.id, ...productData };
                setProduct(newProduct);
                setLoading(false);
            } catch (err) {
                setError(err);
                try {
                    const res = await getUnProducto(id);
                    setProduct(res);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                }
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            {loading ? (
                <LoaderCuber />
            ) : (
                <>
                    {error ? (
                        <div>Error: {error.message}</div>
                    ) : (
                        <ItemDetail product={product} />
                    )}
                </>
            )}
        </>
    );
};

export default ItemDetailContainer;