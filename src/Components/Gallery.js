import React from 'react'
import '../StyleCSS/Gallery.css'

function Gallery() {
    return (
        <div className='container-fluid  pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-2 flex-wrap align-content-center mb-4'>
                    <h5 className='ps-3'>Gallery</h5>
                </div>
                <div className='col-lg-10'>
                    <div className='mansory'>
                        <img src="Images/Fanmeeting2.jpg" alt="" />
                        <img src="Images/VietNam2.jpg" alt="" />
                        <img src="Images/VietNam3.jpg" alt="" />
                        <img src="Images/VietNam4.jpg" alt="" />
                        <img src="Images/VietNamFanmeeting1.jpg" alt="" />
                        <img src="Images/Fanmet2.jpg" alt="" />
                        <img src="Images/Fanmmet6.jpg" alt="" />
                        <img src="Images/Fanmet5.jpg" alt="" />
                        <img src="Images/Fanmmet7.jpg" alt="" />
                        <img src="Images/Fanmmet9.jpg" alt="" />
                        <img src="Images/Fanmmeet8.jpg" alt="" />
                        <img src="Images/Fanmmet10.jpg" alt="" />
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery