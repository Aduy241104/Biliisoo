import React, { useEffect, useState } from 'react'
import Media from '../Components/Media'
import data from '../MusicPage.json'
import { OrbitProgress } from "react-loading-indicators";


function News() {

  const [newData, setNewData] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const [visible, setVisible] = useState(4);


  function handleShowMore() {
    setVisible(prev => prev + 4);
  }

  function handleShowLess() {
    setVisible(4);
  }


  useEffect(() => {
    setInterval(() => {
      if (data.Media) {
        setNewData(data.Media);
        setLoad(!isLoad);
      }
    }, 2000)
  }, [])

  return (
    <div className='container-fluid bg-dark pt-5 p-5 d-flex justify-content-center align-content-center new-layout'>
      <div className='new-wrapper w-75 row bg-black d-flex justify-content-center p-5 rounded-4'>
        <h1 className='text-center text-light pb-5'>NEWS</h1>


        { (isLoad) ?
          (<div className='w-100 p-5 mt-5 d-flex justify-content-center'><OrbitProgress color="#6B4AE4" size="large" text="Hi" textColor="" /></div>) :
          (newData.slice(0, visible).map((item) => (
            <Media
              key={ item.id }
              id={ item.id }
              title={ item.title }
              thumbnail={ item.thumbnail }
            />
          )))
        }

        <div className='w-100 text-center'>
          { (visible < newData.length) ? (
            <button className='text-white bg-transparent border-0 p-5' onClick={ () => handleShowMore() }>LOAD MORE <i className="fa-solid fa-chevron-down"></i></button>
          ) : (
            newData.length > 4 && <button className='text-white bg-transparent border-0 p-5' onClick={ () => handleShowLess() }>SHOW LESS <i className="fa-solid fa-chevron-up"></i></button>
          ) }
        </div>
      </div>
    </div>
  )
}

export default News