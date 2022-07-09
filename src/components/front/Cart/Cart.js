import React from 'react'


const Cart = (cartItems,handleAddProduct,handleRemoveProduct) => {


const totalPrice=cartItems.reduce((price,item)=>{
    price+item.quantity*item.price
})
  return (
    <div className='cart-items'>
        <div className='cart-items-header'>Cart Items</div>



    {cartItems.length===0&&(<div className='empty'> No Items are Added</div>)}
    <div>
        {cartItems.map((item)=>{
            return(
                <div key={item.id} className="cart-items-list">
                    <img className='cart-items-image' src={item.image} />

                    <div className='cart-items-name'>
                        {item.name}
                    </div>
                    <div className='cart-items-function'>
                      <button className='cart-items-add' onClick={()=>handleAddProduct(item)}>+</button>
                      <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>

                    </div>
                    <div>
                        {item.quantity}*${item.price}
                    </div>
                    <div>
                        Total price
                        <div>
                            ${totalPrice}
                        </div>
                    </div>
                     </div>
                     
                     
            )
        })}
    </div>
    </div>
  )
}

export default Cart