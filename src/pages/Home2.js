import React from 'react'
import {Row,Col} from 'antd'
import { FaDiscord,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';
export default function Home2(props){
    return(
        <div className="">
            <div id="header" className="mt-5">
                <Row justify="center">
                    <Col md={20} lg={10}>
                    <div className="mx-auto text-center">
                        <img src="/logo.png" alt="" className="img-fluid "/>
                        <h1 className="display-1 mt-3 bold text-black">
                            Nomu Labs
                        </h1>
                        <p className="text-center">
                        Our mission is to educate, share and provide services to help people reap the benefits that NFTs can offer. Through preparation, expertise and professionalism we aim to go hand in hand with those that want to be a part of the future.
                        </p>
                    </div>
                    </Col>
                </Row>
            </div>
            <div className="mt-5">
                <video className="img-fluid w-100" loop autoPlay muted>
                    <source src="/assets/horizontal.mp4"/>
                </video>
            </div>
            <div className="mt-10 container">
                <Row justify="space-between" gutter={[16,16]}>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold ">
                            Consulting
                        </h1>
                         <img src="/assets/consulting.svg" alt="" className="img-fluid customIcon mt-3"/>
                        <p className="mt-3">
                        This world is confusing, and making your first steps in it is hard. We want to help businesses and individuals unlock all of their potential with this technology.                        </p>
                        <div className="mt-auto">
                        <button className="btn btn-outline-dark">Learn more</button>

                        </div>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold ">
                            Development
                        </h1>
                         <img src="/assets/computer.svg" alt="" className="img-fluid customIcon mt-3"/>
                        <p className="mt-3">
                        We are creating our own solutions to help everyday people get closer to the Web 3.0 ecosystem. We understand what is lacking in this world and we know how to fix it. Metaverses, NFTs, Blockchain.                        </p>
                        <div className="mt-auto">
                        <button className="btn btn-outline-dark">Learn more</button>

                        </div>
                    </Col>
                    <Col className="text-center" md={24} lg={8}>
                        <h1 className="bold ">
                            Community
                        </h1>
                         <img src="/assets/education.svg" alt="" className="img-fluid customIcon mt-3"/>
                        <p className="mt-3">
                        Our mission is to bring mass adoption to Web 3.0. We want to help you understand the risks and benefits that come with this new technology. Getting scammed is never fun, and we do not want those episodes to ruin your Web 3.0 experience.                        </p>
                        <div className="mt-auto">
                        <button className="btn btn-outline-dark">Learn more</button>

                        </div>
                    </Col>                                        
                </Row>
            </div>
            {/* <div className="mt-10 container">
                <Row justify="space-between" align="middle">
                    <Col lg={14} md={24}>
                        <h1 className="bold">The nomuverse</h1>
                        <p className="mt-3">
                        The world is changing, we firmly believe that web 3.0 and NFTs are here to stay. These technologies have entered in a disruptive way in many industries and with the passage of time will eventually become the tapestry on which a new world is woven, as happened with the internet as we know it. Today we are far from this utopia but there are many benefits it can offer compared to current solutions and from NOMU we want to help you to start benefiting from them.
                        </p>
                    </Col>
                    <Col>
                        <img src="/assets/whale.jpeg" alt="" className="img-fluid" style={{maxHeight:"700px"}}/>
                    </Col>
                </Row>

            </div> */}
            <div className="responsiveBackground mt-10" style={{background:"url('/assets/prism.jpg')"}}>
            <div className="container p-10">
            <Row justify="start" align="middle" className="mt-5">                  
                    <Col lg={12} md={24} sm={24} xs={24} className="text-start text-white">
                        <h1 className="bold text-white">The Nomuverse</h1>
                        <p className="mt-3">
                        The world is changing, we firmly believe that web 3.0 and NFTs are here to stay. These technologies have entered in a disruptive way in many industries and with the passage of time will eventually become the tapestry on which a new world is woven, as happened with the internet as we know it. Today we are far from this utopia but there are many benefits it can offer compared to current solutions and from NOMU we want to help you to start benefiting from them.                        </p>
                    </Col>
                </Row>                   
                <Row justify="end" align="middle">                  
                    <Col lg={12} md={24} sm={24} xs={24} className="text-end text-white">
                        <h1 className="bold text-white">The Nomu Labs</h1>
                        <p className="mt-3">
                        Nomu is a group of dreamers and passionate about what they do, with a high level of knowledge about blockchain technology and the possibilities offered by web 3.0 that will guide and advise you in the process of creating and implementing your project.
                        </p>
                        <button className="mt-5 btn btn-outline-light">Learn more</button>
                    </Col>
                </Row>
             

            </div>
            </div>
            <div className="bg-black">
                <div className="container-fluid px-5 py-3">
                    <Row align="bottom" justify="space-between" gutter={[16,16]}>
                        <Col className="">
                            <Row align="bottom" gutter={[16,16]}>
                                <Col>
                                <img src="/logo-white.png" alt="" className="img-fluid logo"/>

                                </Col>
                                <Col>
                                <span className="text-white">
                                Nomu Labs S.L.
                            </span>
                                </Col>
                            </Row>

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