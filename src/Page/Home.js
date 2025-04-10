import React, { useEffect, useState } from 'react'
import HeaderPage from '../Components/HeaderPage'
import SlideShow from '../Components/SlideShow'
import NewSong from '../Components/NewSong';

function Home() {

    const [dataBanner, setDataBanner] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Banners")
            .then(respond => respond.json())
            .then(result => {
                console.log(result);
                setDataBanner(result)
            }
            )
    }, [])

    return (
        <div className='pb-5' style={ { overflowX: 'hidden' } }>
            <HeaderPage />
            <SlideShow data={ dataBanner } />
            <NewSong/>

        </div>
    )
}

export default Home