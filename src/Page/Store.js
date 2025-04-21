import React, { useEffect, useState } from 'react'
import Filter from '../Components/Filter'
import data2 from '../Store.json'
import ProductList from '../Components/ProductList'
import { logDOM } from '@testing-library/dom';

function Store() {
  const [productList, setProductList] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [availability, setAvailability] = useState({ action: "all" });

  function handleChangeMaxPrice(newPrice) {
    setMaxPrice(newPrice)
  }

  function handleChangeMinPrice(newPrice) {
    setMinPrice(newPrice);
  }


  function handleChangeAvaibility(newAction) {
    console.log("changed");
    console.log(availability);

    setAvailability(prev => ({ ...prev, action: newAction }))
  }

  useEffect(() => {
    console.log("Min: ", minPrice);
    console.log("Max: ", maxPrice);

    if (maxPrice == 0 && minPrice == 0 && availability.action == "all") {
      console.log(data2);
      setProductList(data2.Product);
      return;
    }

    if (maxPrice >= minPrice) {
      let newProductList = data2.Product.filter((item) => {
        return item.price <= maxPrice && item.price >= minPrice;
      })

      switch (availability.action) {
        case "in stock":
          newProductList = newProductList.filter((item) => item.stock > 0);
          break;
        case "out stock":
          newProductList = newProductList.filter((item) => item.stock == 0);
          break;
        default:
          console.log("heheheh");
          break;
      }

      console.log("new list: ", newProductList);
      setProductList(newProductList);
    }

  }, [maxPrice, minPrice, availability])


  useEffect(() => {
    if (data2.Product) {
      setProductList(data2.Product);
    }
  }, [])



  return (
    <div className='container-fluid mt-3'>
      <div className='ps-3'>
        <h1 className='mb-3'>Store</h1>
        <Filter
          handleChangeMinPrice={ handleChangeMinPrice }
          handleChangeMaxPrice={ handleChangeMaxPrice }
          handleChangeAvaibility={ handleChangeAvaibility }
        />
        <ProductList
          dataProduct={ productList }
        />

      </div>
    </div>
  )
}

export default Store