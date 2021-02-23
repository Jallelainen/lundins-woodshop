import React from 'react'

const ProductCard = (props) => {
    const Cards = props.products.map((product) => {
        return (
            <div className="card">
                <img src="" alt="Product Image"/>
                <div className="card-body">
                    <h3>{product.Name}</h3>
                    <p>{product.Description}</p>
                    <b>Pris: {product.Price}</b>
                    <a className="btn button-outline-primary">Lägg i varukorg</a>
                </div>
            </div>
        )
    })
}

const Grid = (props) => {

    return 
}

const ProductGrid = (props) => {
    return <div></div>
}

export default ProductGrid