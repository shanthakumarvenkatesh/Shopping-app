import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart'

const Switch = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>} />
        <Route path='/signup' element={<Signup />}   />    
        <Route path='/cart' element={<Cart  cartItems={cartItems} handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}/>}   />    
        </Routes>

    </div>
  )
}

export default Switch