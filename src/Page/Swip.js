import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../App.css'



function Swip({ images }) {

    return (
        <div>
            <Swiper navigation={ true } modules={ [Navigation] } className="mySwiper">
                { images.map((item, index) => {
                    return (
                        <SwiperSlide key={ index }>
                            <img src={ `${process.env.PUBLIC_URL}${item}` } alt="" />
                        </SwiperSlide>
                    )

                }) }
            </Swiper>
        </div>
    )
}

export default Swip