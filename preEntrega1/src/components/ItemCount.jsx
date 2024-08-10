import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true)

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);

        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <>  {visible ?
            <div className="contadorCarrito">
                <div className="btn-group contador" role="group" aria-label="Basic outlined example">
                    <h3 className="ContadorComprar" onClick={decrementar}>-</h3>
                    <h3 className="ContadorComprar">{contador}</h3>
                    <h3 className="ContadorComprar" onClick={incrementar}>+</h3>
                </div>
                <div>
                    <a href="#" className="btn">
                        <h4 className="BotonComprar" onClick={addToCart}>Comprar</h4>
                    </a>
                </div>
            </div> : <Link to={"/cart"} className="BotonComprar text-dark">Finalizar mi compra</Link>}

        </>
    )
}

export default ItemCount