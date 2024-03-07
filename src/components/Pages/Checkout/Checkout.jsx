import { useContext, useState, useEffect } from "react";
import { data } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../../../context/context";



// Este componente realiza el proceso de checkout para finalizar una orden de compra.

const Checkout = () => {
    
    //Variables de estado
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    // Variables del  Usecontext
    const { cart, emptyCart, total } = useContext(CartContext);


    const handleForm = (e) => {
        e.preventDefault();
    };

    // Validación de campos
    if (!name || !lastName || !phone || !email || !emailConfirmation) {
        setError("Los campos no coinciden, tampoco pueden quedar vacíos!!");
        return;
    }

    // Creación del objeto orden
    const order = {
        items: cart.map((product) => ({
            id: product.item.id,
            nombre: product.item.name,
            cantidad: product.cantidad,
        })),
        total: total,
        fecha: new Date(),
        name,
        lastName,
        phone,
        email,
    };

    // Actualización del stock segun firestone
    Promise.all(
        order.items.map(async (productOrder) => {
            const productRef = doc(data, "products", productOrder.id);
            const productDoc = await getDoc(productRef);
            const actualStock = productDoc.data().stock;

            await updateDoc(productRef, {
                stock: actualStock - productOrder.cantidad,
            });
        })
    )
        .then(() => {
            addDoc(collection(db, "ordenes"), order)
                .then((docRef) => {
                    setOrderId(docRef.id);
                    emptyCart();
                })
                .catch((error) => {
                    console.log("Error al crear la orden", error);
                    setError("Error al crear la orden. Intente otra vez");
                });
        })
        .catch((error) => {
            console.log("No se pudo actualizar el stock", error);
            setError("No se puede actualizar el stock, intente contactarse al Whatsapp");
        });
};



return (
    <main className="container text-center">
        <div className="row">
            <h1 className="m-5">
                <span>[</span> Checkout <span>]</span>
            </h1>

            <form onSubmit={handleForm} className="col-12">
                {
                    carrito.map(product => (
                        <div key={product.item.id}>
                            <p> {product.item.name} x {product.cantidad} </p>
                            <p>{product.item.price}</p>
                            <hr />
                        </div>
                    ))
                }
                <div className="form-floating mb-5">
                    <label htmlFor="" placeholder="Nombre" required>Nombre</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-floating mb-5">
                    <label htmlFor="" placeholder="Apellido" required>Apellido</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-floating mb-5">
                    <label htmlFor="" placeholder="Telefono" required>Telefono</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-floating mb-5">
                    <label htmlFor="" placeholder="name@example.com" required>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-floating mb-5">
                    <label htmlFor="" placeholder="name@example.com" required>Confirmación de email</label>
                    <input type="email" onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}> {error} </p>}

                <button type="submit" className="btn" style={{ margin: "8px" }}> Confirmar Compra </button>

                {
                    orderId && (
                        <strong className="orderId">¡Gracias por tu compra! Tu número de orden es: {orderId} </strong>
                    )
                }
            </form>
        </div>
    </main>
)

export default Checkout