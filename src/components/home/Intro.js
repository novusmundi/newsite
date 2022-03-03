import React,{useState, useEffect} from 'react'


export default function Intro(props){
    const [hide,setHide] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setHide(true)
        },4000)
    },[])
    return(
        <div className={hide?"fadeOut":""}>
        <div className="fullScreen fixed-top bg-white d-flex justify-content-center align-items-center">
            <div className="container text-center">
                <img src="/assets/logoanimadogif.gif" alt="" className={(hide?"fadeOutOpacity":"") + " img-fluid"}/>
            </div>
        </div> 
        </div>
    )
}