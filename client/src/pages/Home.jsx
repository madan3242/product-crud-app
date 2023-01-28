import React, { Fragment } from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <Fragment>
        <Navbar />
        <Carousel />
        <ProductList />
    </Fragment>
  )
}

export default Home