import React from 'react'
import {Row,Col} from 'antd'
import { FaDiscord,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';


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
        <div className="">
            <div id="header" className="">
                <Row justify="center">
                    <Col md={20} sm={20} xs={20} lg={10}>
                    <div className="mx-auto mt-5 text-center">
                    {/* <div className="d-none d-lg-block">
                        <img src="/logo.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="d-lg-none">
                        <img src="/logo.png" alt="" className="img-fluid img-md"/>
                    </div> */}
                        <h1 className="display-1 bold text-black">
                            Nomu Labs
                        </h1>
                        <p className="text-center semi-bold mt-5">
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
            <div className="mt-10 container">
                <Row justify="space-between" gutter={[16,32]}>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="semi-bold ">
                            Consulting
                        </h1>
                         <img src="/assets/fig5.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        This world is confusing, and making your first steps in it is hard. We want to help businesses and individuals unlock all of their potential with this technology.                        </p>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="semi-bold ">
                            Development
                        </h1>
                         <img src="/assets/fig3.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        We are creating our own solutions to help everyday people get closer to the Web 3.0 ecosystem. We understand what is lacking in this world and we know how to fix it. Metaverses, NFTs, Blockchain.                        </p>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="semi-bold ">
                            Community
                        </h1>
                         <img src="/assets/fig2.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        Our mission is to bring mass adoption to Web 3.0. We want to help you understand the risks and benefits that come with this new technology. </p>
                    </Col>                                        
                </Row>
            </div>
            <div className="responsiveBackground " >
            <div className=" p-10">
            <Row justify="end" align="middle" className="mt-5">                  
                    <Col lg={12} md={24} sm={24} xs={24} className="text-start">
                        <h1 className="display-5 semi-bold">Novus Mundi</h1>
                        <p className=" mt-5">
                        The world is changing, we firmly believe that web 3.0 and NFTs are here to stay. These technologies have entered in a disruptive way in many industries and with the passage of time will eventually become the tapestry on which a new world is woven, as happened with the internet as we know it. Today we are far from this utopia but there are many benefits it can offer compared to current solutions and from NOMU we want to help you to start benefiting from them.                     

                        </p>                        
                        <p className="text-start">
                        Nomu is a group of dreamers, specialized in blockchain technology, web 3.0 and NFTs that will guide and advise you in the process of creating and implementing your project.
                        </p>
                        <button className="mt-5 btn btn-outline-light">Learn more</button>
                    </Col>
                </Row>                                
            </div>
            </div>            
            <div className="mt-10 responsiveBackground" style={{background:"url('/assets/prism.jpg')"}}>
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
                        </div>
                        </Col>
                    </Row>
                </div>
                </div>     
                <div className="p-10 gradient1">
                    <Row justify="end">
                        <Col lg={10} md={24}>
                        <h1 className="text-white">Educational Workshops</h1>

                        </Col>
                    </Row>
                    <Row justify="end" align="middle" className="mt-5">
                        {/* <Col lg={10} md= {24} gutter={[16,16]}>
                            <div className="text-center">
                                <img src="/assets/nomuxiade.png" alt="" className="img-fluid"/>
                                <p className="text-white">Powered by NOMU</p>

                            </div>
                        </Col> */}
                        <Col lg={10} md={24}>
                        <h4 className="text-white">Transform your art into NFTs - 19/02/2022</h4>
                        <p className="mt-3 text-white">
                            En este taller te ayudaremos a conocer las herramientas disponibles en el mundo de los NFTs para poder expandir tu trabajo como creativo.
                        </p>
                        <button className="btn btn-outline-light">Learn more</button>
                        </Col>
                    </Row>
                </div>  
                <div className="mt-5 p-10 container-fluid">
                    <Row gutter={[16,16]} justify="space-between" align="middle">
                        <Col lg={10} md={24}>
                        <h1>The nomu team</h1>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque volutpat libero vel faucibus. Etiam dictum lectus non viverra venenatis. Aliquam id eros mattis, pellentesque nunc vel, maximus augue. Maecenas tristique pharetra magna ac varius. Morbi auctor urna nec cursus rutrum. Nam vel nulla elit. Aenean vitae congue risus. 
                        </p>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque volutpat libero vel faucibus. Etiam dictum lectus non viverra venenatis. Aliquam id eros mattis, pellentesque nunc vel, maximus augue. Maecenas tristique pharetra magna ac varius. Morbi auctor urna nec cursus rutrum. Nam vel nulla elit. Aenean vitae congue risus. 
                        </p>
                        <button className="btn btn-dark mt-3">Learn more</button>
                        </Col>
                        <Col lg={12} md={24} >
                            <img src="/assets/dogs.jpg" alt="" className="img-fluid"/>
                        </Col>
                    </Row>
                </div>     
                <div className="mt-10">
                    <h1 className="bold display-1 text-center">NFT Collections</h1>
                    <div className="mt-10  p-10 responsiveBackground fullScreen d-flex align-items-center"  style={{background:"url('/assets/nomush.jpg')"}} >
                        <div className="">
                        <Row justify="end">
                            <Col lg={8} md={24}>
                                <h1 className="text-white text-end">The Nomush Collection</h1>
                                <p className="mt-3 text-white text-end">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque volutpat libero vel faucibus. Etiam dictum lectus non viverra venenatis. Aliquam id eros mattis, pellentesque nunc vel, maximus augue. Maecenas tristique pharetra magna ac varius. Morbi auctor urna nec cursus rutrum. Nam vel nulla elit. Aenean vitae congue risus. 
                                </p>
                                <div className="text-end">
                                <button className="mt-3 btn btn-outline-light">Check out</button>

                                </div>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    <div className="p-10 responsiveBackground fullScreen d-flex align-items-center"  style={{background:"url('/assets/prism.jpg')"}} >
                        <div className="">
                        <Row justify="start">
                            <Col lg={8} md={24}>
                                <h1 className="text-white text-start">The Prism Collection</h1>
                                <p className="mt-3 text-white text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque volutpat libero vel faucibus. Etiam dictum lectus non viverra venenatis. Aliquam id eros mattis, pellentesque nunc vel, maximus augue. Maecenas tristique pharetra magna ac varius. Morbi auctor urna nec cursus rutrum. Nam vel nulla elit. Aenean vitae congue risus. 
                                </p>
                                <div className="text-start">
                                <button className="mt-3 btn btn-outline-light">Check out</button>

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
                                    <FaInstagram></FaInstagram>
                                </Col>
                                <Col>
                                    <FaDiscord></FaDiscord>
                                </Col>
                                <Col>
                                    <FaLinkedin></FaLinkedin>
                                </Col>
                                <Col>
                                    <FaTwitter></FaTwitter>
                                </Col>                                                                                                
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}