import React from 'react'

function ListenNow() {
  return (
    <div className='container-fluid pt-5 pb-5 bg-dark'>
      <div className='row pt-5 pb-5'>
        <div className='col-md-12 col-12 d-flex justify-content-center mb-5 pt-5'>
          <iframe className='video-format'
            src="https://www.youtube.com/embed/2V6lvCUPT8I?rel=0&modestbranding=1&controls=1&showinfo=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
        <div className='col-12 mt-5 d-flex justify-content-between pe-5 ps-5'>
          <h1 className='text-light'>𝓛𝓲𝓼𝓽𝓮𝓷 𝓝𝓸𝔀</h1>
          <button className='bg-secondary pe-5 ps-5 border-0 rounded-5 text-light'>View All</button>
        </div>

      </div>
    </div>
  )
}

export default ListenNow