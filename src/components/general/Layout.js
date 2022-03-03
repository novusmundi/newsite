import React from 'react'
import Header from './Header'
import {Row, Col} from 'antd'
import { FaDiscord,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';

export default function Layout(props){
    return(
        <div className="">
            <Header/>
            {props.children}
            <div className="bg-black mt-10">
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
                    
        </div>
    )
}

