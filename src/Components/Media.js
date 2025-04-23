import React from 'react'
import '../StyleCSS/Media.css'
import { useNavigate } from 'react-router-dom'

function Media({ id, title, thumbnail }) {

  const navigate = useNavigate();

  function handleViewNewDetail(id) {
    navigate(`/media/${id}`);
  }


  return (
    <div className='col-md-5 col-12 mb-4 new-item-layout'>
      <div className='media-wrapper bg-light rounded-3'>
        <div className='media-section-1 h-75'>
          <img src={thumbnail } alt="" className='w-100 h-100' />
        </div>
        <div className='media-section-2 p-3'>
          <p>{title}</p>
          <p>JAN 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Media