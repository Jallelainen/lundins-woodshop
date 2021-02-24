import React from 'react'

const ProductCard = (props) => {
    const Cards = props.products.map((product) => {
        return (
            <div className="card mb-2">
                <img src="" alt="Product Image"/>
                <div className="card-body">
                    <h3>{product.Name}</h3>
                    <p>{product.Description}</p>
                    <b>Pris: {product.Price}</b>
                    <button className="btn-sm btn-outline-success ml-2">Lägg i varukorg</button>
                </div>
            </div>
        )
    })

    return <div className="card-columns">{Cards}</div>
}

const ProductGrid = (props) => {
    return(
        <div className="container">
            <ProductCard 
            products={props.products}/>
        </div> )
}

export default ProductGrid