import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts } = useContext(CartContext)

    if (totalProducts() === 0) {
        console.log(totalProducts())
        return (
            <div className="container ">
                <div className="row">
                    <div className="col text-center">
                        <img src="/image/cart2.svg" alt="carrito" width={60} />
                        <h1>Su carrito esta vacío</h1>
                        <h4>Agrega productos para poder visualizarlos acá</h4>
                        <Link to={"/"} className="btn btn-dark rounded-pill">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container tableCarrito">
            <div className="col">
                <div className="row" >
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="aling-middle text-end btn-sm tituloCarrito" colSpan={5}>Vaciar Carrito  <img src="/image/trash-fill.svg" alt="Eliminar el producto" width={25} onClick={clear} /></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="aling-middle"><img src={item.image} alt={item.title} width={100} /></td>
                                    <td className="aling-middle tituloCarrito">{item.title}</td>
                                    <td className="aling-middle text-center tituloCarrito">${item.price} X {item.quantity}</td>
                                    <td className="aling-middle tituloCarrito">${item.price * item.quantity}</td>
                                    <td className="aling-middle text-end"><img src="/image/trash-fill.svg" alt="Eliminar el producto" width={25} onClick={() => { removeItem(item.id) }} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="aling-middle tituloCarrito">Precio total</td>
                                <td className="aling-middle tituloCarrito ">${sumProducts()}</td>
                                <td className="aling-middle text-end btn-sm tituloCarrito"><Link className="text-dark" to={"/checkout"}>Comprar<img src="/image/cart2.svg" alt="ir al Checkout" width={30} /> </Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart