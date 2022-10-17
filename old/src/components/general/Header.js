import React,{useEffect} from 'react'
import $ from 'jquery'
export default function Header(props){

    return(
        <nav class="navbar sticky-top bg-black">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Sticky top</a>
        </div>
        </nav>
    )
}