import React from 'react'
import {Row,Col} from 'antd'
import { FaDiscord,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';
import Layout from  '../components/general/Layout.js'
// import Intro from '../components/home/Intro'
// import Canvas from '../components/home/Canvas'

var EmbedVideo = function(props) {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
         <video
           loop
           muted=""
           data-inline-media-retina-enabled="true"
           autoplay
           playsinline=""
           preload="auto"
           data-load-timeout="5000"
           src="${props.src}"
           class="${props.className}"
         />,
       ` }}></div>
    )
 }

 
export default function Home3(props){


    return(
        <Layout>
            {/* <Intro></Intro> */}
            <div id="home" className="w-100">
                <Row justify="center">
                    <Col md={24} sm={24} xs={24} lg={12}>
                    <div className=" mt-5 text-center">
                        <img src="/assets/nomulabs.png" alt="" className="img-fluid px-15"/>
                        <p className="text-center semi-bold mt-5 p-3">
                        Our mission is to educate, share and provide services to help people reap the benefits that NFTs can offer. Through preparation, expertise and professionalism we aim to go hand in hand with those that want to be a part of the future.
                        </p>
                    </div>
                    </Col>
                </Row>
            </div>
            <div className="mt-5 responsiveBackground w-100" >
                <div className="d-none d-lg-block">
                    <EmbedVideo src="/assets/horizontal.mp4" className="video img-fluid w-100"></EmbedVideo>
                {/* <video id="mobileVideo" className="video img-fluid w-100" loop autoPlay muted>
                    <source  src="/assets/horizontal.mp4"/>
                </video> */}
                </div>
                <div className="d-lg-none w-100">
                    {/* <Canvas></Canvas> */}
                <EmbedVideo src="/assets/output.mp4" className="video img-fluid w-100"></EmbedVideo>
                </div>
            </div>

            <div className=" container mt-10" id="about">
            <Row justify="end" align="middle" className="mt-5" >   
                    <Col lg={10} md={24} sm={24} xs={24}>
                        <img src="/assets/moon.jpg" alt="" className="img-fluid"/>

                    </Col>               
                    <Col lg={12} md={24} sm={24} xs={24} className="text-start">
                        <div className="p-3">
                        <h1 className="display-5 bold">"Novus Mundi"</h1>
                        <p className=" mt-5">
                        The world is changing faster than ever. At Nomu Labs we firmly believe that Web 3.0 and NFTs are here to stay. These technologies have entered in a disruptive manner in many different industries and with the passage of time they will become the canvas on which a new world is painted, just as the internet has changed our lives in the past decade. Today, a lot of these solutions are far from perfect but there are still many benefits they can offer compared to what we have and from Nomu Labs we want to help you to start benefiting from them.
                        </p>                        
                        <p className="text-start">
                        Nomu Labs is a group of dreamers and doers, who will guide and advise you in the process of creating and implementing NFT and Web 3.0 projects for your business or personal benefit.
                        </p>
                        </div>
                    </Col>
                </Row>                                
            </div>  
            <div className="black-bg text-white mt-10 py-10 px-5 w-100">


            <div className="container w-100">
                <Row justify="space-between" gutter={[32,32]} id="services">
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold text-white">
                            Consulting
                        </h1>
                         <img src="/assets/fig5white.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        This world is confusing, and making your first steps in it is hard. We want to help businesses and individuals unlock all of their potential with this technology.                        </p>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold text-white">
                            Development
                        </h1>
                         <img src="/assets/fig3white.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        We are creating our own solutions to help everyday people get closer to the Web 3.0 ecosystem. We understand what is lacking in this world and we know how to fix it. Metaverses, NFTs, Blockchain.                        </p>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold text-white">
                            Community
                        </h1>
                         <img src="/assets/fig2white.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        Our mission is to bring mass adoption to Web 3.0. We want to help you understand the risks and benefits that come with this new technology. </p>
                    </Col>                                        
                </Row>
            </div>          
            <div className="mt-5 container d-none d-lg-block">
                <Row gutter={[32,32]} justify="space-between">
                    <Col lg={10} className="">
                            <div className=" mt-20">
                            <h1 className="text-white bold">Long-term Vision</h1>
                            <p className="mt-3">
                                In a changing world, companies need to be on their feet, which requires effective strategies and long-term planification. We are very excited to see how companies and brands are gradually joining the NFT space. However, you will not add value to your business by simply creating or implementing NFTs because you want to follow a trend. It is important to analyze where they could be beneficial for you and to build a strategy to create value around them for the following years.
                            </p>
                            </div>
                            <img src="/assets/studio.jpg" alt="" className="img-fluid  mt-10"/>
                            <div className=" mt-20">
                            <h1 className="text-white bold">We are here to listen</h1>
                            <p className="mt-3">
                                If you are thinking of entering the NFT space, do not hesitate to contact us without any commitment. We will be delighted to listen to your ideas and contribute our professional and technical vision. There are no stupid questions!
                            </p>
                            {/* <button className="mt-3 btn btn-light">Learn more</button> */}
                            </div>
                    </Col>
                    <Col lg={10} className="text-end">
                        <img src="/assets/tunnel.jpg" alt="" className="img-fluid "/>
                        <div className=" mt-10 text-start">
                            <h1 className="text-white bold">Flexibility</h1>
                            <p className="mt-3">
                            Not everyone has the same needs. We aim to offer personalized and flexible services based on the client. We provide all the relevant information regarding the management of processes and communication, covering the professional and technical implications of implementing NFTs to your business or personal life.
                            </p>
                            </div>
                            <img src="/assets/listen.jpg" alt="" className="mt-10 img-fluid"/>
                    </Col>
                </Row>
            </div>
            <div className="d-lg-none container w-100">
                <div className="mt-10">
                    <div className="p-2">
                    <img src="/assets/longterm.png" alt="" className="img-fluid mobile-service-img"/>
                    <p className="mt-5">
                            In a changing world, companies need to be on their feet, which requires effective strategies and long-term planification. We are very excited to see how companies and brands are gradually joining the NFT space. However, you will not add value to your business by simply creating or implementing NFTs because you want to follow a trend. It is important to analyze where they could be beneficial for you and to build a strategy to create value around them for the following years.
                    </p>
                    </div>
                    <div className="p-2 mt-5">
                    <img src="/assets/flexibility.png" alt="" className="img-fluid mobile-service-img"/>
                    <p className="mt-5">
                    Not everyone has the same needs. We aim to offer personalized and flexible services based on the client. We provide all the relevant information regarding the management of processes and communication, covering the professional and technical implications of implementing NFTs to your business or personal life.
                    </p>
                    </div>
                    <div className="p-2 mt-5">
                    <img src="/assets/listen.png" alt="" className="img-fluid mobile-service-img"/>
                    <p className="mt-5">
                    If you are thinking of entering the NFT space, do not hesitate to contact us without any commitment. We will be delighted to listen to your ideas and contribute our professional and technical vision. There are no stupid questions!
                    </p>
                    </div>
                </div>
            </div>
     
            </div>    
            <div className="p-10 responsiveBackground" style={{background:"url('/assets/gradient.jpg')"}}>
                    <Row justify="space-between" align="middle" className="mt-5" gutter={[32,32]}>
                        <Col lg={5} md={24}>
                            <img src="/assets/nomuxiade.png" alt="" className="img-fluid px-3"/>
                        </Col>
                        <Col lg={10} md={24}>
                        <h1 className="text-white">Educational Workshops</h1>
                        <h4 className="text-white mt-5">Transform your art into NFTs - 19/02/2022</h4>
                        <p className="mt-3 text-white">
                In this workshop we will help you understand the tools available in the NFT world in order to expand your work as creators.
                        </p>
                        </Col>
                    </Row>
                </div>  
                <div className="mt-5 p-10 container-fluid">
                        <h1 className="display-1 bold text-center" id="team">The Nomu Team</h1>
                        <Row gutter={[32,64]} justify="center" align="middle" className="mt-10">
                            <Col lg={8} md={24} className="text-center">
                                
                                    <div className="imageContainer">
                                    <a href="https://www.linkedin.com/in/pablo-astiarraga-perez-de-castro-866421210/">
                                        <img src="/assets/team/asti2.png" alt="" className="img-fluid teamPhoto"/>
                                    </a>
                                    </div>
                                <h4 className="mt-3">Pablo Astiarraga</h4>
                                <h5 className="mt-2">Designer & co-Founder</h5>
                            </Col>
                            <Col lg={8} md={24} className="text-center">
                                
                                    <div className="imageContainer">
                                        <a href="https://www.linkedin.com/in/borja-colom-773b31231/">
                                            <img src="/assets/team/borja.png" alt="" className="img-fluid teamPhoto"/>
                                        </a>
                                    </div>
                                <h4 className="mt-3">Borja Colom</h4>
                                <h5 className="mt-2">Architect & co-Founder</h5>
                            </Col>
                            <Col lg={8} md={24} className="text-center">
                                
                                    <div className="imageContainer">
                                        <a href="https://www.linkedin.com/in/javier-mateache/">
                                            <img src="/assets/team/javi.png" alt="" className="img-fluid teamPhoto"/>
                                        </a>
                                    </div>
                                <h4 className="mt-3">Javier Mateache</h4>
                                <h5 className="mt-2">Business Manager & co-Founder</h5>
                            </Col>
                            <Col lg={8} md={24} className="text-center">
                                
                                    <div className="imageContainer">
                                        <a href="https://luispozo.es/">
                                            <img src="/assets/team/luis2.png" alt="" className="img-fluid teamPhoto"/>
                                        </a>
                                    </div>
                                <h4 className="mt-3">Luis Pozo</h4>
                                <h5 className="mt-2">Developer & co-Founder</h5>
                            </Col>
                            <Col lg={8} md={24} className="text-center">
                                
                                    <div className="imageContainer">
                                        <a href="https://www.linkedin.com/in/eduardothapar/">
                                            <img src="/assets/team/edu2.png" alt="" className="img-fluid teamPhoto"/>
                                        </a>
                                    </div>
                                <h4 className="mt-3">Eduardo Thapar</h4>
                                <h5 className="mt-2">Marketing, BD & co-Founder</h5>
                            </Col>
                        </Row>
                        <Row justify="center" align="middle" className="mt-5" gutter={[16,16]}>

                        </Row>
                </div>     
                <div className="mt-5">
                    <div className="mt-10  p-10 nomushbg d-flex align-items-center"  style={{background:"url('/assets/nomush2.png')"}} >
                        <div className="">
                        <Row justify="end">
                            <Col lg={10} md={24}>
                                <div className="text-end d-none d-lg-block ">
                                    <img src="/assets/nomushlogo.png" alt="" className="img-fluid img-lg"/>
                                </div>
                                <div className="text-end d-lg-none ">
                                    <img src="/assets/nomushlogo.png" alt="" className="img-fluid img-md"/>
                                </div>
                                <h1 className="text-white text-end mt-5">The Nomush Collection</h1>
                                <p className="mt-3 text-white text-end">
                                The Nomush collection symbolizes the growth of our community. With our logo being the main character, the growing skin acts as a reference to our transition into the kingdom of NFTs. This collection aims to attract new players into the game, briging non crypto-savvy art collectors as early holders and believers.                                </p>
                                <div className="text-end">
                                    <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/the-nomush">
                                        <button className="mt-3 btn btn-outline-light">Check out</button>   
                                    </a>

                                </div>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    <div className="p-10 responsiveBackground d-flex align-items-center"  style={{background:"url('/assets/prism.jpg')"}} >
                        <div className="">
                        <Row justify="start">
                            <Col lg={10} md={24}>
                                <img src="/assets/prismblanc.png" alt="" className="img-fluid img-lg"/>
                                <h1 className="text-white text-start mt-5">The Prism Collection</h1>
                                <p className="mt-3 text-white text-start">
                                The term refraction stands for a physical change in the direction of waves passing from one medium to another, we see the transition from Web 2.0 to Web 3.0 as the change of medium, with art acting as the wave, the Prism collection represents the journey of the every-day art creator & collector into this new vast realm of opportunities.
                                </p>
                                <div className="text-start">
                                <button className="mt-3 btn btn-outline-light">Coming Soon</button>

                                </div>
                            </Col>
                        </Row>
                        </div>
                    </div>
                </div>
                
            <div className="bg-black">
                <div className="px-15 py-10">
                    <Row justify="space-between" align="middle" gutter={[32,32]}>
                    <Col className="text-end w-100 d-lg-none " lg={10} md={24}>
                        <a href="/#home" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Home
                        </h1>
                        </a>
                        <a href="/#about" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    About
                        </h1>
                        </a>
                        <a href="/#services" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Services
                        </h1>
                        </a>
                        <a href="/#team" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Team
                        </h1>
                        </a>
                        <a href="/#collections" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    NFT Collections
                        </h1>
                        </a>
                        <a href="/#contact" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Contact
                        </h1>
                        </a>                      
                        </Col>
                        <Col lg={10} md={24}>
                            <div className="d-lg-none mt-5"></div>
                            <h1 className="display-3 text-white bold" id="contact">
                                Join us in our adventure into the future
                            </h1>
                            <a href="mailto:info@nomulabs.com" className="text-white">
                                <h2 className="text-white semi-bold mt-3">info@nomulabs.com</h2>
                            </a>
                            <Row className="text-white mt-5" justify="start" gutter={[16,16]}>
                                    <Col>
                                        <a target="_blank" rel="noreferrer" className="text-white" href="https://www.instagram.com/nomulabs/">
                                            <h1 className="text-white">
                                            <FaInstagram></FaInstagram>
                                            </h1>
                                        </a>
                                    </Col>
                                    <Col>
                                    <a target="_blank" rel="noreferrer"  className="text-white" href="https://discord.com/invite/zKHF2n4xmh">
                                        <h1 className="text-white">
                                        <FaDiscord></FaDiscord>
                                        </h1>
                                    </a>
                                    </Col>
                                    <Col>
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/nomulabs/" className="text-white">
                                            <h1 className="text-white">
                                            <FaLinkedin></FaLinkedin>   
                                            </h1>
                                        </a>
                                    </Col>
                                    <Col>
                                    <a className="text-white"  target="_blank" rel="noreferrer" href="twitter.com/nomuHQ/">
                                        <h1 className="text-white">
                                        <FaTwitter></FaTwitter>
                                        </h1>
                                    </a>
                                    </Col>                                                                                                
                                </Row>  
                        </Col>
                        <Col className="text-end w-100 d-none d-lg-block " lg={10} md={24}>
                        <a href="/#home" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Home
                        </h1>
                        </a>
                        <a href="/#about" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    About
                        </h1>
                        </a>
                        <a href="/#services" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Services
                        </h1>
                        </a>
                        <a href="/#team" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Team
                        </h1>
                        </a>
                        <a href="/#collections" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    NFT Collections
                        </h1>
                        </a>
                        <a href="/#contact" className="noLink mt-3 ">
                        <h1 className="text-white bold">
                                    Contact
                        </h1>
                        </a>                      
                        </Col>
                        

                    </Row>
                </div>
            </div>
        </Layout>
    )
}






