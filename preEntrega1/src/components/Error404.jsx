import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>❌ ERROR404 ❌</h1>
                    <h3>La pagina que estas buscando no existe</h3>
                    <Link to={"/"} className="btn btn-dark rounded-pill">Volver a la página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Error404