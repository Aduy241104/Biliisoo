import React, { useEffect, useState } from 'react'
import Filter from '../Components/Filter'
import data2 from '../Store.json'
import ProductList from '../Components/ProductList'
import { OrbitProgress } from "react-loading-indicators";

function Store() {
  const [productList, setProductList] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
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
    setAvailability(prev => ({ ...prev, action: newAction }))
  }

  useEffect(() => {
    if (maxPrice == 0 && minPrice == 0 && availability.action == "all") {
      setProductList(data2.Product);
      return;
    }

    if (maxPrice >= minPrice) {
      let newProductList;
      if (maxPrice === 0 && minPrice === 0) {
        newProductList = data2.Product
      } else {
        newProductList = data2.Product.filter((item) => {
          return item.price <= maxPrice && item.price >= minPrice;
        })
      }

      switch (availability.action) {
        case "in stock":
          newProductList = newProductList.filter((item) => item.stock > 0);
          break;
        case "out stock":
          newProductList = newProductList.filter((item) => item.stock == 0);
          break;
        default:
          break;
      }
      setProductList(newProductList);
    }

  }, [maxPrice, minPrice, availability])

  useEffect(() => {
    setTimeout(() => {
      if (data2.Product) {
        setProductList(data2.Product);
        setIsLoad(!isLoad);
      }
    }, 3000)
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

        { (isLoad) ?
          (<div className='w-100 p-5 mt-5 d-flex justify-content-center'><OrbitProgress color="#000000" size="large" text="Hi" textColor="" /></div>) :
          (<ProductList dataProduct={ productList } />)
        }
      </div>
    </div>
  )
}

export default Store