import React, { useEffect, useState } from 'react'
import Song from './Song'
import '../StyleCSS/Song.css'

function NewSong() {
    const [song, setSong] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Music")
             .then (respond => respond.json())
            .then(result => setSong(result))

    }, [])
    return (
        <div className='container-fluid bg-dark mt-5 p-4'>
            <h2 className='text-center text-light mb-5 title-new_-song'>New Song</h2>
            <div className='row'>
                {song.map((item) => {
                    return (
                        <Song
                        img={item.img}
                        name={item.name}
                        singer={item.singer}
                        id={item.id}
                        key={item.id}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default NewSong