import React, { useEffect, useState } from 'react'
import HeaderPage from '../Components/HeaderPage'
import SlideShow from '../Components/SlideShow'
import NewSong from '../Components/NewSong';
import data from '../MusicPage.json'
import SingerInformation from '../Components/SingerInformation';
import Filmography from '../Components/Filmography';

function Home() {

    const [dataBanner, setDataBanner] = useState([]);

    useEffect(() => {
        if (data.Banners) {
            console.log("banner: ", data.Banners);

            setDataBanner(data.Banners);
        }
    }, [])

    return (
        <div className='pb-5'>
            <HeaderPage />
           <div style={{overflow:'hidden'}}>
                { dataBanner && <SlideShow data={ dataBanner } /> }
           </div>
            <NewSong />
            <SingerInformation/>
            <Filmography/>
        </div>
    )
}

export default Home