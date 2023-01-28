import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductForm from '../components/ProductForm'

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: "", image: "", price: "", qty: "", info: ""
    });
    let navigate = useNavigate();
    let btn = "Create";

    let productHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    let imageHandler = (e) => {
        let imageFile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setProduct({
                    ...product,
                    image: reader.result
                })
            } else {
                alert("Error...")
            }
        })
    }

    let submitHandler = (e) => {
        e.preventDefault();
        let url = `http://127.0.0.1:4000/api/products`
        Axios.post(url, product)
             .then((res) => {
                navigate('/admin');
             })
             .catch((err) => {

             })
    }

  return (
    <>
        <Navbar />
        <ProductForm product={product} productHandler={productHandler} imageHandler={imageHandler} submitHandler={submitHandler} btn={btn} />
    </>
  )
}

export default CreateProduct