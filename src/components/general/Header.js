import React,{useEffect} from 'react'
import $ from 'jquery'
export default function Header(props){
    useEffect(() => {
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
        if ($('.smart-scroll').length > 0) { // check if element exists
            var last_scroll_top = 0;
            $(window).on('scroll', function() {
                let scroll_top = $(this).scrollTop();
                if(scroll_top < last_scroll_top) {
                    $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                }
                else {
                    $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                }
                last_scroll_top = scroll_top;
            });
}
    },[])
    return(
                    <nav class="navbar smart-scroll navbar-expand-lg navbar-light transparent-white-bg px-5">
                        <a class="navbar-brand" href="/#home">
                            <img src="/logo.png" alt="" className="d-none d-lg-block img-fluid logo"/>
                            <img src="/logo.png" alt="" className="d-lg-none img-fluid logo-min"/>
                        </a>
                        <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                        <li class="nav-item active"> <a class="nav-link" href="/#home">Home </a> </li>
                        <li class="nav-item"><a class="nav-link" href="/#about"> About </a></li>
                        <li class="nav-item"><a class="nav-link" href="/#services"> Services </a></li>
                        <li class="nav-item"><a class="nav-link" href="/#team"> Team </a></li>
                        <li class="nav-item"><a class="nav-link" href="/#collections"> NFT Collections </a></li>

                        </ul>
                    </div>
                    </nav>
                )
}