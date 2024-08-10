import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import arrayProductos from "../assets/json/ropa.json";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from './Loading';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemsCoollection = collection(db, "items");
        const q = id ? query(itemsCoollection, where("category", "==", id)) : itemsCoollection;
        getDocs(q).then(documento => {
            if (documento.docs.length > 0) {
                setItems(documento.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false)
            } else {
                console.error("no existe la coleccion");
            }
        });
    }, [id]);


    return (
        <>
            <div className="containerCards">
                {loading ? <Loading /> : <ItemList items={items} />}
            </div>
        </>

    );
};

export default ItemListContainer;
