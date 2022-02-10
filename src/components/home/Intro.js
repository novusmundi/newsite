import React,{useState} from 'react'

// var EmbedVideo = function(props) {
//     return (
//         <div dangerouslySetInnerHTML={{ __html: `
//          <video
//            muted
//            autoplay
//            playsinline
//            src="${props.src}"
//            class="${props.className}"
//          />,
//        ` }}></div>
//     )
//  }

export default function Intro(props){
    const [hide,setHide] = useState(false)
    return(
            hide?(
                <></>
            ):(
                <div className="fullScreen d-flex justify-content-center align-items-center">
                <div className="container">
                    <video  id="intro" src="/assets/intro.mp4"   muted autoPlay onEnded={() => setHide(true)} className="img-fluid"></video>
                </div>
            </div> 
            )
    )
}