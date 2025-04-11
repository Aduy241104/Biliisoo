import React, { useEffect, useState } from 'react'
import '../StyleCSS/Slide.css'

function SlideShow({ data }) {
    const [initSlide, setSlides] = useState([]);

    //khi dùng state kiểu này thì sẽ rất quan trọng key
    //react sẽ dựa vào key và tạo ra một DOM mới và so sánh với DOM Cũ nếu nhận thấy key không thay đổi thì react sẽ không render lại toàn bộ
    // trong trường hợp slide này thì khi item-slide có key là 1 bị dời về cuối array, nó sẽ tương tự như appenchild

    useEffect(() => {
        if (data) {
            setSlides(data);
        }
    }, [data])


    const handleNext = () => {
        setSlides(prev => [...prev.slice(1), prev[0]]);
    };

    const handlePrev = () => {
        setSlides(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    };

    return (
        <div className='container-Slide p-4'>
            <div className='slide'>
                { initSlide.map((item) => {
                    return (
                        <div className='item-slide' style={ { backgroundImage: `url(${item.ImageUrl})` } } key={ item.id }>
                            <div className='content-slide'>
                                <div className='name-slide'>{ item.Title }</div>
                                <div className='des line-clamp'>{ item.Description }</div>
                                <button>See more</button>

                            </div>
                        </div>
                    )
                }) }
            </div>
            <div className='button-slide'>
                <button className='prev' onClick={ handlePrev }><i className="fa-solid fa-arrow-left"></i></button>
                <button className='next' onClick={ handleNext }><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default SlideShow