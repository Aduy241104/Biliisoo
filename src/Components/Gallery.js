import React from 'react'
import CardSwip from './SwiperCard/CardSwip'

const imageList = [
    "/Images/VietNam3.jpg",
    "/Images/Fanmmet10.jpg",
    "/Images/Fanmeeting2.jpg",
    "/Images/VietNam2.jpg",
    "/Images/VietNam4.jpg",
    "/Images/VietNamFanmeeting1.jpg",
    "/Images/Fanmet2.jpg",
    "/Images/Fanmmet6.jpg",
    "/Images/Fanmet5.jpg",
    "/Images/Fanmmet7.jpg",
    "/Images/Fanmmet9.jpg",
    "/Images/Fanmmeet8.jpg"
];

function Gallery() {
    return (
        <div className='container-fluid pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-2 flex-wrap align-content-center mb-4'>
                    <h5 className='ps-2 pb-2 pt-2 bg-light rounded-5'>Gallery</h5>
                </div>
                <div className='col-lg-10'>
                    <CardSwip listImg={ imageList } />
                </div>
            </div>
        </div>
    )
}
export default Gallery