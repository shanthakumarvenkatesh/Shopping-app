import React from 'react'
import './Product.css'
import { data } from '../../back/data/Data'

const Products = ({productItems,handleAddProduct}) => {
    return (
        <div className='product'>
            {data.productItems.map((productItem) => {
                return(
                    <div className='card'>
                        <div>
                            <img className='product-image' src={productItem.image} />
                        </div>
                        <div>
                            <h3 className='product-name'>{productItem.name}</h3>
                        </div>
                        <div>
                            <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}>Add to Cart</button>
                        </div>
                        <div className='product-price'>
                            ${productItem.price}
                           
                        </div>

                     

                    </div>
                    
                )
            })}


        </div>
    )
}

export default Products

