import React, { useEffect, useRef, useState } from 'react'
import '../StyleCSS/MusicPlay.css'
import Wave from 'react-wavify'
import SuggestMusic from '../Components/SuggestMusic';
import dataMusic from '../MusicPage.json'
import { useParams } from 'react-router-dom';


function PlayMusic() {
    const [isPlay, setPlay] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audio, setAudio] = useState({});
    const { id } = useParams();
    const audioRef = useRef(null);


    function handleSeek(e) {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }

    function handleTimeUpdate() {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    }

   

    function handlePlayMusic() {
        if (!isPlay) {
            audioRef.current.play();
        } else {
            audioRef.current.pause()
        }
        setPlay(!isPlay);
    }

    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        if (dataMusic.Music) {
            let audioOBJ = dataMusic.Music.find((item) => item.id == id);

            if (audioOBJ) {
                setCurrentTime(0)
                setDuration(0);
                setPlay(false)
                setAudio(audioOBJ);
            }
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, [id]);

    return (
        <div className='play-music-layout container-fluid bg-dark d-flex flex-column align-items-center'>
            <div className='play-frame bg-blur w-25 p-3 rounded-2 mt-4 mb-4'>
                <div className='play-image rounded-2'>
                    <img src={ `${process.env.PUBLIC_URL}${audio.img}` } alt="" />
                </div>
                <div className='mt-2'>
                    <audio src={ `${process.env.PUBLIC_URL}${audio.audio}` } ref={ audioRef }></audio>
                    <div className='text-left w-100 text-light mb-2'>
                        <h5 className=''>{ audio.name }</h5>
                        <span>JISOO</span>
                        <input
                            type="range"
                            min={ 0 }
                            value={ currentTime }
                            max={ duration }
                            onChange={ handleSeek }
                            className='w-100 mt-1'
                        />
                        <div className='w-100 d-flex justify-content-between' style={{fontSize:'13px'}}>
                            <span>{ formatDuration(currentTime) }</span>
                            <span>{ formatDuration(duration) }</span>
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-around align-items-center'>
                        <i class="fa-solid fa-heart"></i>
                        <button
                            className='rounded-5 mt-2 border-0'
                            onClick={ () => handlePlayMusic() }>{ (!isPlay) ? (<i className="fa-solid fa-play"></i>) : (<i className="fa-solid fa-pause"></i>) }
                        </button>
                        <i class="fa-solid fa-volume-high"></i>
                    </div>
                </div>
            </div>

            <div className='suggest-music-layout mt-4 z-2 p-2 rounded-4'>
                <SuggestMusic
                    data={ dataMusic.Music }
                />
            </div>

            <div className='play-footer w-100'>
                <Wave fill='rgb(173,170,199)'
                    paused={ !isPlay }
                    style={ { display: 'flex', height: '100%' } }
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