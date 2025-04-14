import React, { useEffect, useState } from 'react'
import HeaderPage from '../Components/HeaderPage'
import SlideShow from '../Components/SlideShow'
import NewSong from '../Components/NewSong';
import data from '../MusicPage.json'
import SingerInformation from '../Components/SingerInformation';
import Filmography from '../Components/Filmography';
import Gallery from '../Components/Gallery';
import ListenNow from '../Components/ListenNow';
import News from '../Components/News';

function Home() {
    const [dataBanner, setDataBanner] = useState([]);

    useEffect(() => {
        if (data.Banners) {
            setDataBanner(data.Banners);
        }
    }, [])

    return (
        <div className='pb-5'>
            <div style={ { overflow: 'hidden' } }>
                { dataBanner && <SlideShow data={ dataBanner } /> }
            </div>
            <NewSong />
            <SingerInformation />
            <Filmography />
            <ListenNow />
            <News data={ data.Media }/>
            <Gallery />

        </div>
    )
}

export default Home