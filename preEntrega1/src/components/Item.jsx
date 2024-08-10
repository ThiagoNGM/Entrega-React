import { Link } from "react-router-dom"

const Item = ({ producto }) => {

    return (

        <div className="card tarjeta">
            <Link to={"/item/" + producto.id}>
                <img src={producto.image} className=" fotoCard" alt={producto.title} />
            </Link>

            <div className="card-body">
                <h3 className="card-title tituloCard"><b>{producto.title}</b></h3>
                <h5 className="card-text tituloCard text-black"><b>$ {producto.price}</b></h5>
            </div>
        </div>

    )
}


export default Item