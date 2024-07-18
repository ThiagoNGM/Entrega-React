import { useState } from "react"

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador)
            setContador(1)
        }
    }


    return (
        <div className="contadorCarrito">
            <div className="btn-group contador" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn " onClick={decrementar}>-</button>
                <button type="button" className="btn " onClick={onAdd}>{contador}</button>
                <button type="button" className="btn " onClick={incrementar}>+</button>
            </div>
            <div>
                <a href="#" className="btn">
                    <h4 className="BotonComprar">Comprar</h4>
                </a>
            </div>
        </div>

    )
}

export default ItemCount