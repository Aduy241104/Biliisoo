import React from 'react'
import { Link } from 'react-router-dom'
import '../StyleCSS/Song.css'


function Song({ img, name, singer, id }) {
  return (
    <div className='col-md-3 col-6 d-flex justify-content-center block'>
      <div className='p-3 songItem'>
        <img src={ `${process.env.PUBLIC_URL}${img}` } alt="" className='h-75 w-100 song-image mb-2' />
        <div className='text-start'>
          <p className='text-light'>{ name }</p>
          <p className='text-secondary'>{ singer }</p>
        </div>
        <Link className='ps-3 pe-3 pt-2 pb-2 rounded-5 text-center play-button border-1 border'><i className="fa-solid fa-play fs-6"></i></Link>
      </div>
    </div>
  )
}

export default Song