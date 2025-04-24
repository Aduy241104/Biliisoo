import React, { useEffect, useRef, useState } from 'react'
import '../StyleCSS/MusicPlay.css'
import Wave from 'react-wavify'


function PlayMusic() {

    const [isPlay, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    function handleSeek(e) {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }


    function handleTimeUpdate() {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    }

    const audioRef = useRef(null);

    function handlePlayMusic() {
        if (!isPlay) {
            audioRef.current.play();
        } else {
            audioRef.current.pause()
        }
        setPlay(!isPlay);
    }


    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, [])

    return (
        <div className='play-music-layout bg-dark d-flex  justify-content-center '>
            <div className='play-frame w-25 p-3 rounded-2 mt-5'>
                <div className='play-image rounded-2'>
                    <img src="/Images/Banner8.jpg" alt="" />
                </div>
                <div className='d-flex flex-column mt-4 align-items-center'>
                    <audio src="/Audio/JISOO - Your Love (Official Audio).mp4" ref={ audioRef }></audio>
                    <h5>Your Love</h5>
                    <input
                        type="range"
                        min={ 0 }
                        value={ currentTime }
                        max={ duration }
                        onChange={ handleSeek }
                        className='w-100'
                    />
                    <button className='rounded-5 mt-2' onClick={ () => handlePlayMusic() }>{ (!isPlay) ? (<i className="fa-solid fa-play"></i>) : (<i className="fa-solid fa-pause"></i>) }</button>
                </div>
            </div>

            <div className='play-footer w-100'>
                <Wave fill='rgb(173,170,199)'
                    paused={ !isPlay }
                    style={ { display: 'flex', height:'100%' } }
                    options={ {
                        height: 20,
                        amplitude: 20,
                        speed: 0.9,
                        points: 3
                    } }
                />

            </div>
        </div>
    )
}

export default PlayMusic