import React, { useRef, useState } from 'react'
import '../StyleCSS/MusicPlay.css'

function MusicPlayer() {
    const [isPlay, setPlay] = useState(false);


    const audioRef = useRef(null);

    function handlePlayMusic() {
        if (isPlay) {
            audioRef.current.play();
        } else {
            audioRef.current.pause()
        }
        setPlay(!isPlay);
    }

    return (
        <div>
            <button onClick={ () => handlePlayMusic() }>{ (!isPlay) ? "play" : "pause" }</button>
            <audio src="/Audio/JISOO - Your Love (Official Audio).mp4" ref={ audioRef }></audio>
        </div>
    )
}

export default MusicPlayer