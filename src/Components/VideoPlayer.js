import React, { useRef } from 'react';
import video from "../assets/University clip.mp4";

export default function VideoPlayer({playState, setPlayState}) {


    const player = useRef();

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls alt=''></video>
    </div>
  )
}
