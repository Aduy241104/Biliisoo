import React, { useEffect, useState } from 'react'
import data from '../MusicPage.json'

function Filmography() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [content, setContent] = useState([]);


    function handleChangeIndex(numIndex) {
        setCurrentIndex(numIndex);
    }

    useEffect(() => {
        switch (currentIndex) {
            case 0:
                setContent(data.Awards);
                break;
            case 1:
                setContent(data.Drama);
                break;
            case 2:
                setContent(data.Movie);
                break;
            case 3:
                setContent(data.BroadCast);
                break;
            default:
                setContent(data.Albums);
                break;
        }

    }, [currentIndex])

    return (
        <div className='container-fluid bg-light pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-7 col-sm-12 d-flex flex-wrap justify-content-center mb-4 block'>
                    <div className='w-100 content-infor flex-wrap align-content-center row'>
                        <div className='col-lg-3  flex-wrap align-content-center mb-5'>
                            <h5>FILMOGRAPHY</h5>
                        </div>
                        <div className='col-lg-9'>
                            <div className='d-flex justify-content-around pb-2 border-bottom border-secondary anima'>
                                <button className={ (currentIndex == 0 ? "border-0 bg-transparent fw-bold" : "border-0 bg-transparent text-secondary") } onClick={ () => handleChangeIndex(0) }>AWARDS</button>
                                <button className={ (currentIndex == 1 ? "border-0 bg-transparent fw-bold" : "border-0 bg-transparent text-secondary") } onClick={ () => handleChangeIndex(1) }>DRAMA</button>
                                <button className={ (currentIndex == 2 ? "border-0 bg-transparent fw-bold" : "border-0 bg-transparent text-secondary") } onClick={ () => handleChangeIndex(2) }>MOVIE</button>
                                <button className={ (currentIndex == 3 ? "border-0 bg-transparent fw-bold" : "border-0 bg-transparent text-secondary") } onClick={ () => handleChangeIndex(3) }>BROADCAST</button>
                                <button className={ (currentIndex == 4 ? "border-0 bg-transparent fw-bold" : "border-0 bg-transparent text-secondary") } onClick={ () => handleChangeIndex(4) }>ALBUM</button>
                            </div>

                            <div className='pb-2 border-bottom border-secondary table-content-2'>
                                <div className="bg-transparent p-4 table-content">
                                    { content.map((item, index) => {
                                        return (
                                            <div className="row mb-4" key={ index }>
                                                <div className="col-2 fw-normal">{ item.year }</div>
                                                <div className="col-10">{ item.content }</div>
                                            </div>
                                        )
                                    }) }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-sm-12 text-center block'>
                    <img src="Images/Jisoo3.jpg" alt="" className='w-75 rounded-4 hj' />
                </div>
            </div>
        </div>
    )
}

export default Filmography