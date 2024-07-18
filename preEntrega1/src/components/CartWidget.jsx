const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn position-relative">
                <img src="/image/cart2.svg" width={40} alt="carrito" />
                <span className="position-absolute top-3 start-10 translate-middle badge rounded-pill bg-black">
                    1
                </span>
            </button>
        </div>
    );
}

export default CartWidget;