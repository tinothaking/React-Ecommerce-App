import React, { useState } from "react"
import "./assets/css/cart.css"

const CartProduct = (props) => {
    let numOccurences = getNumOccurences(props.productID, Array.from(JSON.parse(localStorage.getItem("user")).pids))
    const [qty, setQty] = useState(numOccurences)

    const product = (
        qty > 0 &&
        <div
            class="cart--product-container"
            identifier={`${props.productID}`}
            key={`${props.productID}`}
        >
            <div class="cart--product-img">
                <img src={`../resources/products/${props.productID}.jpg`} />
            </div>
            <div class="cart--product-details">
                <div class="product--text">
                    <h1>{props.productName}</h1>
                    <span>${props.productPrice}</span>
                </div>
                <div class="product--qty">
                    <button
                        class="decr"
                        onClick={() => {
                            if (qty > 1) {
                                const newPids = removeVal(props.productID, Array.from(JSON.parse(localStorage.getItem("user")).pids))
                                localStorage.setItem("user",
                                    JSON.stringify(
                                        {
                                            cart: JSON.parse(localStorage.getItem("user")).cart,
                                            pids: newPids
                                        }
                                    )
                                )

                                setQty(qty - 1) //local version of quantity
                            }
                        }}
                    >-</button>
                    <div class="current-qty">{qty}</div>
                    <button
                        class="incr"
                        onClick={() => {
                            const newPids = Array.from(JSON.parse(localStorage.getItem("user")).pids)
                            newPids.push(props.productID)
                            localStorage.setItem("user",
                                JSON.stringify(
                                    {
                                        cart: JSON.parse(localStorage.getItem("user")).cart,
                                        pids: newPids
                                    }
                                )
                            )

                            setQty(qty + 1)
                        }}
                    >+</button>
                </div>
            </div>
            <a href="#!">
                <div
                    className="cart--remove-btn"
                    onClick={() => {
                        const newPids = removeAll(props.productID, Array.from(JSON.parse(localStorage.getItem("user")).pids))
                        localStorage.setItem("user",
                            JSON.stringify(
                                {
                                    cart: JSON.parse(localStorage.getItem("user")).cart,
                                    pids: newPids
                                }
                            )
                        )

                        setQty(0)
                    }}
                >
                <img src="../resources/x-icon.png"/>
                </div>
            </a>
        </div>
    )
    //console.log(document.querySelectorAll(`div[identifier="${props.productID}"]`)[0].remove())//.length === 0)

    return product
}

const getNumOccurences = (str, arr) => {
    let occurences = 0

    for (const element of arr) {
        if (element === str)
            occurences++
    }

    return occurences
}

const removeAll = (val, arr) => {
    return arr.filter((idx) => idx !== val)
}

const removeVal = (productID, newPids) => {
    const idx = newPids.indexOf(productID)
    if (idx !== -1) {
        newPids.splice(idx, 1)
    }

    return newPids
}

const Cart = () => {
    const products = Array.from(new Set(JSON.parse(localStorage.getItem("user")).cart))
    //const dataLocator = JSON.parse(localStorage.getItem("user")).cart
    const CartProducts = products.map((product, idx) => {
        return (
            <CartProduct
                productName={product.productName}
                productID={product.productID}
                productPrice={product.productPrice}
                stock={product.maxStockCount}
            />
        )
    })

    return (
        <>
            {CartProducts}
        </>
    )
}

export default Cart;