import React from 'react'
import { Link } from 'react-router-dom'


function Song({img, name, singer, id}) {
  return (
      <div className='col-md-3 col-6 d-flex justify-content-center'>
        <div className='p-3 songItem'>
              <img src={img} alt="" className='h-75 song-image mb-2' />
              <div className='text-start'>
                  <p className='text-light'>{name}</p>
                  <p className='text-secondary'>{singer}</p>
              </div>
              <Link className='ps-3 pe-3 pt-2 pb-2 rounded-5 text-center play-button border-1 border'><i class="fa-solid fa-play"></i></Link>
        </div>
    </div>
  )
}

export default Song