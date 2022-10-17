import React from 'react'
import EmbedVideo from '../general/EmbedVideo'

export default function Video(props){
    return(
        <div className="d-flex align-items-center justify-content-center black-bg p-5">
            <div className="d-none d-lg-block">
                <EmbedVideo loop={false} extraArgs={"controls"} className="img-fluid bannerVideo" src="/assets/video.mp4"></EmbedVideo>
            </div>
            <div className="d-lg-none w-100">
                <img src="/assets/videoMobile.jpg" alt="" className="img-fluid"/>
            </div>
        </div>
    )
}