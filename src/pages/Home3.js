import React from 'react'
import {Row,Col} from 'antd'
import { FaDiscord,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';
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
                        <p className="text-justify">
                        Our mission is to educate, share and provide services to help people reap the benefits that NFTs can offer. Through preparation, expertise and professionalism we aim to go hand in hand with those that want to be a part of the future.
                        </p>
                    </div>
                    </Col>
                </Row>
            </div>
            <div className="mt-5 responsiveBackground " style={{background:"url('/assets/prism.jpg')"}}>
                <div className="d-none d-lg-block">
                <video className="video img-fluid w-100" loop autoPlay muted>
                    <source src="/assets/horizontal.mp4"/>
                </video>
                </div>
                <div className="d-lg-none">
                <video className="video img-fluid w-100" loop autoPlay muted>
                    <source src="/assets/output.mp4"/>
                </video>
                </div>
            </div>
            <div className="responsiveBackground " style={{background:"url('/assets/prism.jpg')"}}>
            <div className="container p-10">
            <Row justify="start" align="middle" className="mt-5">                  
                    <Col lg={18} md={24} sm={24} xs={24} className="text-start text-white">
                        <h1 className="display-5 bold text-white">The novus mundi</h1>
                        <p className="text-justify mt-5">
                        The world is changing, we firmly believe that web 3.0 and NFTs are here to stay. These technologies have entered in a disruptive way in many industries and with the passage of time will eventually become the tapestry on which a new world is woven, as happened with the internet as we know it. Today we are far from this utopia but there are many benefits it can offer compared to current solutions and from NOMU we want to help you to start benefiting from them.                     

                        </p>                        
                        <p className="text-justify">
                        Nomu is a group of dreamers, specialized in blockchain technology, web 3.0 and NFTs that will guide and advise you in the process of creating and implementing your project.
                        </p>
                        <button className="mt-5 btn btn-outline-light">Learn more</button>
                    </Col>
                </Row>                                
            </div>
            </div>
                        
            <div className="mt-10 container">
                <Row justify="space-between" gutter={[16,32]}>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold ">
                            Consulting
                        </h1>
                         <img src="/assets/fig5.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        This world is confusing, and making your first steps in it is hard. We want to help businesses and individuals unlock all of their potential with this technology.                        </p>
                        <div className="mt-auto">
                        

                        </div>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold ">
                            Development
                        </h1>
                         <img src="/assets/fig3.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        We are creating our own solutions to help everyday people get closer to the Web 3.0 ecosystem. We understand what is lacking in this world and we know how to fix it. Metaverses, NFTs, Blockchain.                        </p>
                        <div className="mt-auto">
                        

                        </div>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold ">
                            Community
                        </h1>
                         <img src="/assets/fig2.svg" alt="" className="img-fluid customIcon mt-5"/>
                        <p className="mt-5">
                        Our mission is to bring mass adoption to Web 3.0. We want to help you understand the risks and benefits that come with this new technology. </p>
                        <div className="mt-auto">
                        

                        </div>
                    </Col>                                        
                </Row>
            </div>
            <div className="mt-10 responsiveBackground" style={{background:"url('/assets/nomush.jpg')"}}>
                <div className="container text-white py-10">
                <Row >
                        <Col md={24} lg={16}>
                        <h1 className="display-5 bold text-white">
                            Nomu Labs Consulting
                        </h1>
                        <div className="mt-5">
                            <p className="text-justify">
                            In a changing world, companies need to be on their feet, which requires effective strategies.
                            We are very excited to see how companies and brands are gradually joining the NFT space. However, we are witnessing the lack of strategy and necessary knowledge in the majority of projects that come to light.
                            This is due to the application of bad strategic practices when starting an NFT project. It is essential to have a medium and long-term vision in each decision made in the implementation of an NFT project, otherwise the results will not be as expected.
                            At Nomu Labs we offer NFT strategic consulting services and strategy implementation. We are a team with experience in all the necessary fields to achieve the market penetration that your business needs to enter the sector.
                            </p>
                            <h3 className="mt-5 text-white bold">
                            Characteristics of the Nomu Labs consultancy
                            </h3>
                            <p className="text-justify mt-3">
                            Our service begins with an analysis of the current business situation, as well as its relationship with the market, using both fronts as a starting point that will allow your brand to establish the actions with which to achieve the expected objectives.
                            </p>
                            <p className="text-justify mt-3">
                            We offer personalized and flexible services based on the needs of each client. In this sense, we provide all the relevant information regarding the management of processes and communications, also covering areas such as deadlines, methodologies and professional and technical implications on NFTs.
                            </p>
                            <p className="text-justify mt-3">
                            Our purpose is to satisfy and serve as support to those companies that are looking for a strategic ally that drives them forward and helps them develop their NFT projects.

                            </p>
                            <p className="text-justify mt-3">
                            If you are thinking of entering the NFT market, do not hesitate to contact us without any commitment. We will be delighted to listen to your ideas and contribute our professional and technical vision.
                            </p>
                        </div>
                        </Col>
                    </Row>
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