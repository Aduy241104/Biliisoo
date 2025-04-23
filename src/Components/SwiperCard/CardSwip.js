import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import './CardSwip.css'
import 'swiper/css';
import 'swiper/css/effect-cards';

function CardSwip({ listImg }) {
    return (
        <>
            <div className='cs'>
                <Swiper
                    effect={ 'cards' }
                    grabCursor={ true }
                    modules={ [EffectCards] }
                    className="mySwiper-card"
                >
                    { listImg.map((item, index) => {
                        return (
                            <SwiperSlide key={ index }><img src={ `${process.env.PUBLIC_URL}${item}` } alt="" /></SwiperSlide>
                        )
                    }) }
                </Swiper>
            </div>
        </>
    )
}

export default CardSwip