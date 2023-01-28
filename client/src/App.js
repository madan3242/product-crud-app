import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import UpdateProduct from './pages/UpdateProduct'

const App = () => {
  return (<Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/update/:id' element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  </Fragment>)
}

export default App