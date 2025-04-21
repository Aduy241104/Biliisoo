import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../App.css'


function Swip({ images }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        console.log("reff: ", swiperRef);

        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(0); // Reset về slide đầu tiên
        }
    }, [images]);

    return (
        <div>
            <Swiper
                navigation={ true }
                modules={ [Navigation] }
                className="mySwiper"
                onSwiper={ (swiper) => {
                    swiperRef.current = swiper.el; // Lưu DOM element (có swiper instance)
                    swiperRef.current.swiper = swiper; // Gắn instance vào ref để dùng sau
                } }
            >
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