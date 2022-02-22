import React,{useState, useEffect} from 'react'


export default function Intro(props){
    const [hide,setHide] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setHide(true)
        },4500)
    },[])
    return(
        <div className={hide?"fadeOut":""}>
        <div className="fullScreen fixed-top bg-white d-flex justify-content-center align-items-center">
            <div className="container">
                <img src="/assets/logoanimadogif.gif" alt="" className="img-fluid"/>
            </div>
        </div> 
        </div>
    )
}