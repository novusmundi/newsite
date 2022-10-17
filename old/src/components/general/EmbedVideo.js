import React from 'react'

export default function EmbedVideo ({src, className, extraArgs, autoplay=true, loop=true}) {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
         <video
           ${loop?"loop":""}
           muted=""
           data-inline-media-retina-enabled="true"
           ${autoplay ? "autoplay":""}
           playsinline=""
           preload="auto"
           data-load-timeout="5000"
           src="${src}"
           class="${className}"
           ${extraArgs}
         />,
       ` }}></div>
    )
 }