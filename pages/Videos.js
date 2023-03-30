import React, { useRef, useState } from 'react';
import "./video.css";


function Videos() {

  const videoRef = useRef(null)
  const [play,setPlay] = useState(false)
    
    function handdleStart(){

        if(play){
            videoRef.current.pause()
            setPlay(false)
        }else{
            videoRef.current.play()
            setPlay(true)
        }
    }

  return (
    <div className='video'>
        exe
        <video 
            className='video__player'
            ref={videoRef}
            onclick={handdleStart}
            loop
            src="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/vinil.png?alt=media&token=8ab56d00-5de7-4332-a680-c6c22134c365"
        >

        </video>
    </div>

    
  )
}

export default Videos