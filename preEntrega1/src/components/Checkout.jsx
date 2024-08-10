import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { cart, clear, totalProducts, sumProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderID] = useState("")

    const generarOrden = () => {
        if (nombre === "" || email === "" || telefono === "") {
            return false;
        }

        const order = {
            buyer: { name: nombre, phone: telefono, email: email },
            items: cart.map(item => ({ id: item.id, title: item.title, price: item.price })),
            total: sumProducts(),
        };

        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(response => {
            setOrderID(response.id)
            clear()
        })
    };

    if (totalProducts() === 0 && orderId) {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        {orderId ? <div className="ordenFinalizada">
                            <img src="/image/cart2.svg" width={60} />
                            <h3>Gracias por tu compra</h3>
                            <h4>Tu numero de compra es: <b>{orderId}</b></h4>
                            <Link to={"/"} className="btn btn-dark rounded-pill">Volver a la página principal</Link>
                        </div> : ""}
                    </div>
                </div>
            </div>
        )
    }

    if (totalProducts() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src="/image/cart2.svg" alt="carrito" width={60} />
                        <h1>Su carrito está vacío</h1>
                        <h4>Agrega productos para poder visualizarlos aquí</h4>
                        <Link to={"/"} className="btn btn-dark rounded-pill">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ContainerCheckout">
                <div className="CarritoDeCompras">
                    <div className="container tableCarrito">
                        <div className="col">
                            <div className="row">
                                <table className="table">
                                    <tbody>
                                        {cart.map(item => (
                                            <tr key={item.id}>
                                                <td className="align-middle"><img src={item.image} alt={item.title} width={50} /></td>
                                                <td className="align-middle tituloCarrito">{item.title}</td>
                                                <td className="align-middle text-center tituloCarrito">${item.price} X {item.quantity}</td>
                                                <td className="align-middle tituloCarrito">${item.price * item.quantity}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={3} className="align-middle tituloCarrito">Precio total</td>
                                            <td colSpan={2} className="align-middle tituloCarrito">${sumProducts()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Formulario">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} />
                        </div>

                        <button type="button" className="BotonOrden" onClick={generarOrden}>Realizar Orden</button>
                    </form>
                </div>
            </div>
        )
    }

};

export default Checkout;
