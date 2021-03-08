import React from 'react'

const ProductCard = (props) => {

    const Cards = props.products.map((product) => {
        return (
            <div className="card shadow mb-4 bg-light" key={product.Id}>
                <img src={props.stolPic} className="m-3 mx-auto d-block" id="productPic" alt="Product Image"/>
                <div className="card-body">
                    <h3>{product.Name}</h3>
                    <p>{product.Description}</p>
                    <b>Pris: {product.Price}:-</b>
                    <button className="btn-sm btn-outline-success ml-2" value={product.Id} onClick={() => props.addToCart(product.Id)}>Lägg i varukorg</button>
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
            products={props.products}
            stolPic={props.stolPic}
            addToCart={props.addToCart}/>
        </div> )
}

export default ProductGrid