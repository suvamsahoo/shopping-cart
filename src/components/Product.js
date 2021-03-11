import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props; //object destructuring

    return (
        <div className="productBox">
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>₹{product.price}</div>
            <div>
                <button onClick={() => onAdd(product)} className="BTNstyle">Add to Cart</button>
            </div>
        </div>
    )
}
