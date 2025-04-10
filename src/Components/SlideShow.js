import React, { useEffect } from 'react'
import '../StyleCSS/Slide.css'

function SlideShow({ data }) {

    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        if (next) {
            next.addEventListener('click', function () {
                const items = document.querySelectorAll('.item-slide');
                document.querySelector('.slide').appendChild(items[0]);
            });
        }

        if (prev) {
            prev.addEventListener('click', function () {
                const items = document.querySelectorAll('.item-slide');
                document.querySelector('.slide').prepend(items[items.length - 1]);
            });
        }

        return () => {
            // cleanup: gỡ sự kiện khi component unmount
            if (prev) {
                prev.removeEventListener('click', function () { });
            }
            if (next) {
                next.removeEventListener('click', function () { });
            }
        };
    }, []);

    return (

        <div className='container-Slide'>
            <div className='slide'>
                { data.map((item, index) => {
                    return (
                        <div className='item-slide' style={ { backgroundImage: `url(${item.ImageUrl})` } } n key={ index }>
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
                <button className='prev'><i class="fa-solid fa-arrow-left"></i></button>
                <button className='next'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default SlideShow