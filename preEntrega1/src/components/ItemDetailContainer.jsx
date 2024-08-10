import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    // acceder a un documento de firestore


    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id)
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() })
            } else {
                console.error("El documento no existe")
            }
        }).catch(error => {
            console.error("Error al obtener el documento:", error);
        });
    }, [id])


    return (
        <ItemDetail item={item} />
    )
}
export default ItemDetailContainer