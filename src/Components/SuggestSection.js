import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../App.css'
import { Link } from 'react-router-dom';


function SuggestSection({ listProduct }) {

    return (
        <>
            <Swiper
                slidesPerView={ 3 }
                spaceBetween={ 30 }
                pagination={ {
                    clickable: true,
                } }
                modules={ [Pagination] }
                className="mySwiper"
            >
                { listProduct.map((item) => {
                    return (
                        <SwiperSlide>
                            <Link to={ `/ProductDetail/${item.id}` } className='text-decoration-none text-dark'>
                                <div>
                                    <img src={ `${process.env.PUBLIC_URL}${item.images[0]}` } alt="" />
                                    <h5 className='line-clamp2'>{ item.title }</h5>
                                    <p>${ item.price } USD</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                }) }
            </Swiper>
        </>
    )
}

export default SuggestSection