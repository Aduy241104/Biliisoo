import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ dataProduct }) {
    return (
        <div className='mt-5'>
            <div className='row'>
                { dataProduct.map((item) => {
                    return (
                        <ProductItem
                            image={ item.images[0] }
                            productName={ item.title }
                            price={ item.price }
                            id={item.id}
                            key={ item.id }
                        />
                    )
                }) }

            </div>
        </div>
    )
}

export default ProductList