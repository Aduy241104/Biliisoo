import React, { useEffect, useState } from 'react'
import Filter from '../Components/Filter'
import data2 from '../Store.json'
import ProductList from '../Components/ProductList'

function Store() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (data2.Product) {
      setProductList(data2.Product);
    }

  }, [])
  return (
    <div className='container-fluid mt-3'>
      <div className='ps-3'>
        <h1 className='mb-3'>Store</h1>
        <Filter />
        <ProductList
          dataProduct={ productList }
        />

      </div>
    </div>
  )
}

export default Store