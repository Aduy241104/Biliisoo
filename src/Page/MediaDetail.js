import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../StyleCSS/Media.css'
import data from '../MusicPage.json'
import { useNavigate, useParams } from 'react-router-dom'

function MediaDetail() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    let promis = new Promise((resolve, reject) => {
      const obj = data.Media.find((item) => item.id == id);

      if (obj) {
        resolve(obj);
      } else {
        reject();
      }
    });

    promis
      .then((res) => setNews(res))
      .catch(() => navigate("/"))
  }, [])


  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [])





  return (
    <div className='container-fluid bg-dark layout-media pt-5 pb-5'>
      <div className='row d-flex justify-content-center'>
        <div className='media-wrapper col-md-8 col-12'>
          <div className='media-content w-100 bg-black text-white d-flex flex-column align-items-center pt-5 rounded-4'>
            <div className='text-center w-25 pb-5 media-text'>
              <p className=''>{ news.description }</p>
              <h5>
                { news.title }
              </h5>
              <p>
                JAN 2025
              </p>
            </div>

            { (!news.tags) ? "" : (
              news.tags.map((item, index) => {
                return (
                  <img
                    src={ item }
                    alt=""
                    className='w-75 mb-2'
                    key={ index } />)
              })
            ) }
            <button className='bg-transparent text-white border-0 p-5'>VIEW LIST<i class="fa-solid fa-bars ms-2 text-dark"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaDetail