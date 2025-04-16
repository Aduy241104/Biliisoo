import React from 'react'
import '../StyleCSS/Product.css'
import { Link } from 'react-router-dom'

function ProductItem({ image, productName, price, id }) {
    return (
        <div className='col-md-3 col-6 productItem mb-3'>
            <Link to={ `/ProductDetail/${id}` } className='mt-3 text-dark text-decoration-none'>
                <div className='w-100 h-75 layout-product mb-2'>
                    <img src={ `${process.env.PUBLIC_URL}${image}` } alt="" className='w-100 h-100' />
                </div>
                <h5 className='line-clamp3'>{ productName }</h5>
                <p>${ price }</p>
            </Link>
        </div>
    )
}

export default ProductItem