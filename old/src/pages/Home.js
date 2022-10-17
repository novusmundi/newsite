import React,{useEffect, useState} from 'react'

export default function Home(props){
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const [style, setStyle] = useState({
    top:0,
    left:0,
    height:500 + "px",
    width:500 + "px",
})

function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}    
function randomProps(){
    const randomTop = getRandomNumber(0, 100);
    const randomLeft = getRandomNumber(0, 100);
    const size = getRandomNumber(50, 500)
    return(
        {
            top:randomTop +"%",
            left:randomLeft +"%",
            height: size + "px",
            width: size + "px"
        }
    )
}
// useEffect(() => {
//     const MINUTE_MS = 4000;

//     const interval = setInterval(() => {
//         const a = randomProps()
//         const b = randomProps()
//         const c = randomProps()
//         const d = randomProps()
//         const e = randomProps()
//         const f = randomProps()        
//         const _style = {
//             ...style,
//             a:a,
//             b:b,
//             c:c,
//             d:d,
//             e:e,
//             f:f,

//         }
//         console.log(style)
//         setStyle(_style)
//     }, MINUTE_MS);
  
//     return () => clearInterval(interval);
//   }, [])
    return( 
        
        <div className="fullScreen d-flex align-items-center justify-content-center">
            <h1 className='title-xl'>HELLO WORLD</h1>
        </div>
    )
}

