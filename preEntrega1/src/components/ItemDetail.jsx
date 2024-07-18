import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

    return (
        <div className="ContainerCadaCard">

            <div className="imagen">
                <img src={item.image} alt={item.title} className="ImagenDeCadaCard" />
            </div>
            <div className="descripcion">
                <h2 className="titulo">{item.title}</h2>
                <div className="precioCarrito">
                    <h4 className="card-text">$ {item.price}</h4>
                    <ItemCount stock={item.stock} />
                </div>

                <div className="divCuotas">
                    <img src="/image/creditcard.svg" width={40} alt="tarjeta de credito" />
                    <h4 className="cuotas">¡¡ Hasta 6 cuotas sin interes con todas las tarjetas !!</h4>
                </div>
                <p>{item.DescripcionDetallada}</p>
            </div>

        </div>
    )

}

export default ItemDetail