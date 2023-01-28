import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductList = () => {
  let [products, setProducts] =  useState([]);
  useEffect(() => {
    Axios.get('http://127.0.0.1:4000/api/products')
         .then((response) => {
            setProducts(response.data);
         })
         .catch();
  }, []);
  return (
    <div className="container mt-2">
        <div className="row">
            <div className="col-lg"><h1>Products</h1></div>
        </div>
        <div className="row">
        {products.length > 0 ? <>
        { products.map((product) => {
            return <div className="col-lg-3 my-4" key={product._id}>
                <div className="card">
                    <img src={product.image} alt={product.name} />
                    <div className="card-body">{product.name}</div>
                </div>
            </div>
        })}
        </> : <>
        </>}
        </div>
    </div>
  )
}

export default ProductList