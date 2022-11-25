import React, { useState } from "react";

const addToCart = (props) => {
    const obj = JSON.parse(localStorage.getItem("user"))

    let alreadyThere = false

    for(const x of obj.cart) {
        if(x.productID === props.productID) alreadyThere = true
    }

    if(!alreadyThere) obj.cart.push(props)
    obj.pids.push(props.productID)
    
    
      {  const newUser = JSON.stringify(obj)

        localStorage.setItem("user", newUser)
    }
}

const Product = (props) => {
    const [stockCount, setStockCount] = useState(props.stock)
    const productId = props.productID
    return (
        <>
            <a
                href="#!"
                id={`product-${props.productID}`}
                onMouseOver={() => document.querySelector(`#atc-${props.productID}`).style.display = "inline-flex"}
                onMouseLeave={() => document.querySelector(`#atc-${props.productID}`).style.display = "none"}
            >
                <div
                    className="product--container"
                >
                    <div className="product--image-container">
                        <div>
                            <img
                                src={`../resources/products/${props.productID}.jpg`}
                                className="product--image"
                            />
                        </div>
                        <a href="#">
                            <div
                                className="atc--btn"
                                id={`atc-${props.productID}`}
                                style={{ display: "none" }}
                                onClick={() => addToCart(props)}
                            >
                                <span>+ADD TO CART</span>
                            </div>
                        </a>
                    </div>

                    <div className="details">
                        <h1 className="title">
                            {props.productName}
                        </h1>
                        <span className="price">$ {props.productPrice}</span>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Product;