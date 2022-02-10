import React from 'react'
import {Row,Col} from 'antd'
import { FaDiscord,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';
import Layout from  '../components/general/Layout.js'


var EmbedVideo = function(props) {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
         <video
           loop
           muted
           autoplay
           playsinline
           src="${props.src}"
           class="${props.className}"
         />,
       ` }}></div>
    )
 }

 
export default function Home3(props){


    return(
        <Layout>
            <div id="home" className="">
                <Row justify="center">
                    <Col md={24} sm={24} xs={24} lg={12}>
                    <div className=" mt-5 text-center">
                        <img src="/assets/nomulabs.jpg" alt="" className="img-fluid"/>
                        <p className="text-center semi-bold mt-5 p-3">
                        Our mission is to educate, share and provide services to help people reap the benefits that NFTs can offer. Through preparation, expertise and professionalism we aim to go hand in hand with those that want to be a part of the future.
                        </p>
                    </div>
                    </Col>
                </Row>
            </div>
            <div className="mt-5 responsiveBackground " >
                <div className="d-none d-lg-block">
                    <EmbedVideo src="/assets/horizontal.mp4" className="video img-fluid w-100"></EmbedVideo>
                {/* <video id="mobileVideo" className="video img-fluid w-100" loop autoPlay muted>
                    <source  src="/assets/horizontal.mp4"/>
                </video> */}
                </div>
                <div className="d-lg-none">
                <EmbedVideo src="/assets/output.mp4" className="video img-fluid w-100"></EmbedVideo>

                {/* <video id="video" className="video img-fluid w-100" loop autoPlay muted>
                    <source src="/assets/output.mp4"/>
                </video> */}
                </div>
            </div>

            <div className=" container mt-10" id="about">
            <Row justify="end" align="middle" className="mt-5" gutter={[32,32]}>   
                    <Col lg={10} md={24}>
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
                        <button className="mt-5 btn btn-outline-light">Learn more</button>
                        </div>
                    </Col>
                </Row>                                
            </div>  
            <div className="black-bg text-white mt-10 py-10">


            <div className="container px-5 ">
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
            <div className="d-lg-none container">
                <div className="mt-10">
                    <div className="p-3">
                    <img src="/assets/longterm.png" alt="" className="img-fluid mobile-service-img"/>
                    <p className="mt-5">
                            In a changing world, companies need to be on their feet, which requires effective strategies and long-term planification. We are very excited to see how companies and brands are gradually joining the NFT space. However, you will not add value to your business by simply creating or implementing NFTs because you want to follow a trend. It is important to analyze where they could be beneficial for you and to build a strategy to create value around them for the following years.
                    </p>
                    </div>
                    <div className="p-3 mt-5">
                    <img src="/assets/flexibility.png" alt="" className="img-fluid mobile-service-img"/>
                    <p className="mt-5">
                    Not everyone has the same needs. We aim to offer personalized and flexible services based on the client. We provide all the relevant information regarding the management of processes and communication, covering the professional and technical implications of implementing NFTs to your business or personal life.
                    </p>
                    </div>
                    <div className="p-3 mt-5">
                    <img src="/assets/listen.png" alt="" className="img-fluid mobile-service-img"/>
                    <p className="mt-5">
                    If you are thinking of entering the NFT space, do not hesitate to contact us without any commitment. We will be delighted to listen to your ideas and contribute our professional and technical vision. There are no stupid questions!
                    </p>
                    </div>
                </div>
            </div>
     
            </div>    
            <div className="mt-10 p-10 responsiveBackground" style={{background:"url('/assets/gradient.jpg')"}}>
                    <Row justify="end">
                        <Col lg={10} md={24}>
                            <h1 className="text-white">Educational Workshops</h1>
                        </Col>
                    </Row>
                    <Row justify="end" align="middle" className="mt-5">
                        <Col lg={10} md={24}>
                        <h4 className="text-white">Transform your art into NFTs - 19/02/2022</h4>
                        <p className="mt-3 text-white">
                            En este taller te ayudaremos a conocer las herramientas disponibles en el mundo de los NFTs para poder expandir tu trabajo como creativo.
                        </p>
                        </Col>
                    </Row>
                </div>  
                <div className="mt-5 p-10 container-fluid">
                        <h1 className="display-1 bold text-center" id="team">The Nomu Team</h1>
                        <Row gutter={[16,16]} justify="space-between" align="middle" className="mt-10">
                            <Col lg={8} md={24} className="text-center">
                                <img src="/assets/team/pablo.png" alt="" className="img-fluid teamPhoto"/>
                                <h4 className="mt-3">Pablo Astiarraga</h4>
                                <h5 className="mt-2">Designer & co-Founder</h5>
                            </Col>
                            <Col lg={8} md={24} className="text-center">
                                <img src="/assets/team/borja.png" alt="" className="img-fluid teamPhoto"/>
                                <h4 className="mt-3">Borja Colom</h4>
                                <h5 className="mt-2">Architect & co-Founder</h5>
                            </Col>
                            <Col lg={8} md={24} className="text-center">
                                <img src="/assets/team/javi.png" alt="" className="img-fluid teamPhoto"/>
                                <h4 className="mt-3">Javier Mateache</h4>
                                <h5 className="mt-2">Business Manager & co-Founder</h5>
                            </Col>
                        </Row>
                        <Row justify="center" align="middle" className="mt-5" gutter={[16,16]}>
                        <Col lg={8} md={24} className="text-center">
                                <img src="/assets/team/luis.png" alt="" className="img-fluid teamPhoto"/>
                                <h4 className="mt-3">Luis Pozo</h4>
                                <h5 className="mt-2">Developer & co-Founder</h5>
                            </Col>
                            <Col lg={8} md={24} className="text-center">
                                <img src="/assets/team/edu.png" alt="" className="img-fluid teamPhoto"/>
                                <h4 className="mt-3">Eduardo Thapar</h4>
                                <h5 className="mt-2">Marketing, BD & co-Founder</h5>
                            </Col>
                        </Row>
                </div>     
                <div className="mt-5">
                    <h1 className="bold display-1 text-center" id="collections">NFT Collections</h1>
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
                <div className="container-fluid px-5 py-3">
                    <Row align="bottom" justify="space-between" gutter={[16,16]}>
                        <Col>
                            <span className="text-white">
                                Nomu Labs S.L.
                            </span>
                        </Col>
                        <Col>
                            <Row className="text-white" gutter={[16,16]}>
                                <Col>
                                    <a target="_blank" rel="noreferrer" className="text-white" href="https://www.instagram.com/nomulabs/">
                                        <FaInstagram></FaInstagram>
                                    </a>
                                </Col>
                                <Col>
                                <a target="_blank" rel="noreferrer"  className="text-white" href="https://discord.com/invite/zKHF2n4xmh">
                                    <FaDiscord></FaDiscord>
                                </a>
                                </Col>
                                <Col>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/nomu-nft" className="text-white">
                                        <FaLinkedin></FaLinkedin>   
                                    </a>
                                </Col>
                                <Col>
                                <a className="text-white"  target="_blank" rel="noreferrer" href="twitter.com/nomuHQ/">
                                    <FaTwitter></FaTwitter>
                                </a>
                                </Col>                                                                                                
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}







/* <div className="mt-15 responsiveBackground">
<div className="container text-white  p-10">
<Row justify="center">
        <Col md={24} lg={20}>
        <h1 className="display-5 semi-bold text-white">
            Nomu Labs Consulting
        </h1>
        <div className="mt-5">
            <p className="text-start">
            In a changing world, companies need to be on their feet, which requires effective strategies.
            We are very excited to see how companies and brands are gradually joining the NFT space. However, we are witnessing the lack of strategy and necessary knowledge in the majority of projects that come to light.
            This is due to the application of bad strategic practices when starting an NFT project. It is essential to have a medium and long-term vision in each decision made in the implementation of an NFT project, otherwise the results will not be as expected.
            At Nomu Labs we offer NFT strategic consulting services and strategy implementation. We are a team with experience in all the necessary fields to achieve the market penetration that your business needs to enter the sector.
            </p>
            <h3 className="mt-5 text-white semi-bold">
            Characteristics of the Nomu Labs consultancy
            </h3>
            <p className="text-start mt-3">
            Our service begins with an analysis of the current business situation, as well as its relationship with the market, using both fronts as a starting point that will allow your brand to establish the actions with which to achieve the expected objectives.
            </p>
            <p className="text-start mt-3">
            We offer personalized and flexible services based on the needs of each client. In this sense, we provide all the relevant information regarding the management of processes and communications, also covering areas such as deadlines, methodologies and professional and technical implications on NFTs.
            </p>
            <p className="text-start mt-3">
            Our purpose is to satisfy and serve as support to those companies that are looking for a strategic ally that drives them forward and helps them develop their NFT projects.

            </p>
            <p className="text-start mt-3">
            If you are thinking of entering the NFT market, do not hesitate to contact us without any commitment. We will be delighted to listen to your ideas and contribute our professional and technical vision.
            </p>
            <a href="mailto:info@nomulabs.com" className="text-white">
                <h4 className="text-white">Feel free to hit us up at info@nomulabs.com</h4>
            </a>
        </div>

        
        </Col>
    </Row>
</div>
</div> */