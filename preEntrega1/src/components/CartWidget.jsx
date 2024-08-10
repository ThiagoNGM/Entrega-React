import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)

    if (totalProducts() > 0) {
        return (
            <Link to={"/cart"}>
                <button type="button" className="btn position-relative">
                    <img src="/image/cart2.svg" width={40} alt="carrito" />
                    <span className="position-absolute top-3 start-10 translate-middle badge rounded-pill bg-black">
                        {totalProducts()}
                    </span>
                </button>
            </Link>
        );

    }

}

export default CartWidget;
