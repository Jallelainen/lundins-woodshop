import React from 'react'

const ProductCard = (props) => {
    console.log(props.stolPic)

    const Cards = props.products.map((product) => {
        return (
            <div className="card shadow mb-4 bg-light">
                <img src={props.stolPic} id="productPic" alt="Product Image"/>
                <div className="card-body">
                    <h3>{product.Name}</h3>
                    <p>{product.Description}</p>
                    <b>Pris: {product.Price}:-</b>
                    <button className="btn-sm btn-outline-success ml-2" value={product.Id}>Lägg i varukorg</button>
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
            stolPic={props.stolPic}/>
        </div> )
}

export default ProductGrid