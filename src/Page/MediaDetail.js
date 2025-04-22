import React from 'react'
import '../StyleCSS/Media.css'

function MediaDetail() {
  return (
    <div className='container-fluid bg-dark layout-media pt-5 pb-5'>
      <div className='row d-flex justify-content-center'>
        <div className='media-wrapper col-md-8 col-12'>
          <div className='media-content w-100 bg-black text-white d-flex flex-column align-items-center pt-5 rounded-4'>
            <div className='text-center w-25 pb-5 media-text'>
              <p className=''>JISOO at the Dior SS25
                Haute Couture Show in Paris
              </p>
              <h5>
                JISOO X DIOR
                COUTURE SS25 SHOW
              </h5>
              <p>
                JAN 2025
              </p>
            </div>

            <img src="/Images/67ad946849b7e.jpg" alt="" className='w-75 mb-2' />
            <img src="/Images/67ad946849b7e.jpg" alt="" className='w-75 mb-2' />
            <button className='bg-transparent text-white border-0 p-5'>VIEW LIST<i class="fa-solid fa-bars ms-2 text-dark"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaDetail