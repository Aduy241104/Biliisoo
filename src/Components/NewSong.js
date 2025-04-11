import React, { useEffect, useState } from 'react'
import Song from './Song'

import data from '../MusicPage.json'

function NewSong() {
    const [song, setSong] = useState([]);

    useEffect(() => {
        if (data.Music) {
            setSong(data.Music);
        }

    }, [])
    return (
        <div className='container-fluid bg-dark mt-5 p-5'>
            <h2 className='text-center text-light mb-5 title-new-song'>New Song</h2>
            <div className='row'>
                { song.map((item) => {
                    return (
                        <>
                            <Song
                                img={ item.img }
                                name={ item.name }
                                singer={ item.singer }
                                id={ item.id }
                                key={ item.id }
                            />        
                        </>
                       
                        
                    )
                }) }
            </div>

        </div>
    )
}

export default NewSong