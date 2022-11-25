import React, { useState } from "react";
import Product from "./Product";
import ProductJSON from './assets/json/products.json';

const ProductGrid = (sort) => {
    sort = sort || ""

    const productArr = ProductJSON.map((product, idx) => {
        return (
            <Product
                productName={product.productName}
                productID={product.productID}
                productPrice={product.productPrice}
                stock={product.maxStockCount}
                key={idx + 1}
            />
        )
    })

    let temp
    for (let i = 0; i < productArr.length; i++) {
        for (let j = i + 1; j < productArr.length; j++) {
            if (productArr[i].props.productPrice.localeCompare(productArr[j].props.productPrice) > 0) {
                temp = productArr[i]
                productArr[i] = productArr[j]
                productArr[j] = temp
            }
        }
    }
    
    return sort === "desc" ?
        productArr.reverse() :
        productArr
}

const Shop = () => {
    const [sort, setSort] = useState("asc")

    let GridToRender = () => ProductGrid(sort)
    return (
        <div className="shop--page">
            <div className="filters--block">
                {/* <div className="filters">
                    <select>
                        <option value="none">--Filter--</option>
                        <option value="tees">Tees</option>
                        <option value="sweater">Sweaters</option>
                    </select>
                </div> */}
                <div className="sort">
                    <select>
                        <option value="none">--Sort--</option>
                        <option value="desc">Price: High to Low</option>
                        <option value="asc">Price: Low to High</option>
                    </select>
                </div>
                <div className="change-filter">
                    <button
                        onClick={() => setSort(document.querySelector(".sort>select").value)}
                    >
                        Sort
                    </button>
                </div>
            </div>
            <div className="product--grid">
                <GridToRender />
            </div>
        </div>
    )
}

export default Shop;