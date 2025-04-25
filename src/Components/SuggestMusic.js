import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function SuggestMusic({ data }) {
    const navigate = useNavigate();

    function handleChangeMusic(id) {
        navigate(`/playMusic/${id}`)
    }
    return (
        <Swiper
            slidesPerView={ 3 }
            spaceBetween={ 10 }
            className="mySwiper"
        >
            { data.map((item) => {
                return (
                    <SwiperSlide onClick={ () => handleChangeMusic(item.id) } key={ item.id }>
                        <div className='music-card d-flex align-items-end text-light rounded-3' style={ { backgroundImage: `url("${process.env.PUBLIC_URL}${item.img}")` } }>

                        </div>
                    </SwiperSlide>

                )
            }) }

        </Swiper>
    )
}

export default SuggestMusic