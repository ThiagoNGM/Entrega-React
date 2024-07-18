import React from "react"
import Item from "./Item"

const ItemList = ({ items }) => {

    return (
        <>
            {items.map(producto => (
                <Item key={producto.id} producto={producto} />
            ))}
        </>
    )
}

export default ItemList