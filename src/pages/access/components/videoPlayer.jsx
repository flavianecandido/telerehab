import React from "react";
import ReactPlayer from 'react-player'
import video from "../../../assets/video/video-telerehab.mp4"

export function VideoPlayer(){
    return (
        <div>
            <ReactPlayer controls={true} url={video} />
        </div>
    );
}