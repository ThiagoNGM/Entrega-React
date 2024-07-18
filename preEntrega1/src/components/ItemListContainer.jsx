import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import arrayProductos from "../assets/json/ropa.json";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Descripcion from './Descripcion';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const filteredItems = id ? arrayProductos.filter(item => item.category === id) : arrayProductos;

        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(filteredItems);
            }, 2000);
        });

        promesa.then(response => {
            setItems(response);
        });
    }, [id]);

    return (
        <>
            <Descripcion texto={"Nuestra tienda de ropa vintage ofrece una selección exquisita de prendas y accesorios únicos, cuidadosamente seleccionados de diferentes décadas para satisfacer a los amantes de la moda clásica y singular."} />
            <div className="containerCards">
                <ItemList items={items} />
            </div>
        </>

    );
};

export default ItemListContainer;
