import React from 'react'
import '../StyleCSS/Infor.css'

function SingerInformation() {
    return (
        <div className='container-fluid mt-5 mb-5'>
            <div className='row'>
                <div className='col-md-7 col-sm-12 d-flex flex-wrap justify-content-center mb-4 block'>
                    <div className='w-100 content-infor flex-wrap align-content-center row'>
                        <div className='col-lg-3  flex-wrap align-content-center'>
                            <h5 className=''>JISOO</h5>
                        </div>
                        <div className='col-lg-9'>
                            <p>
                                JISOO, who debuted with BLACKPINK in 2016,
                                is a multi-talented artist, shining both as a singer and actress.
                            </p>
                            <p>
                                She is recognized not only for her contributions to the group
                                but also for her successful solo career, earning multiple awards in
                                music and acting.
                            </p>

                            <p>
                                Now established as a icon, JISOO continues to broaden her influence
                                into the realms of fashion, beauty, and beyond.
                            </p>

                            <div className='mt-4'>
                                <span className='me-5'><i class="fa-brands fa-instagram"></i> Instagram</span>
                                <span><i class="fa-brands fa-youtube"></i> YouTube</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-sm-12 text-center block'>
                    <img src="https://www.blissoo.co.kr/cms/data/home/en/1/67aed12324c7f.jpg" alt="img1" className='w-100 rounded-4 hj' />
                </div>
            </div>
        </div>
    )
}

export default SingerInformation