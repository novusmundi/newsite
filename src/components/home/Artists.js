import React from 'react'
import {Row, Col} from 'antd'

export default function Artists(props){
    return(
        <>
        <div className="container p-10">
            <h1 className="subtitle">
                How do we connect artists with users?
            </h1>
            <p className="bold text-lg mt-3">
                Through a simple UX
            </p>
            <div className="mt-5">
                <p className="text-md text-justify">
                    One of our challenges is to look for a mechanism to connect the artist with the users.
                </p>
                <p className="text-md text-justify">
                    We believe that the key to make this happen is creating a great user interactive experience by adding community features to connect those people through the app. We know how painful the blockchain user experience is as of right now, this is why we want to bring you an APP that is easy to use and intuitive
                </p>
            </div>
        </div>
        <div className=" shadow-lg black-bg  w-100">
        <Row justify="center" align="middle">
            <Col className="text-center p-5">
                    <h3 className="bold text-white">Usuarios</h3>
                    <h1 className="bold text-white title">1 M</h1>
            </Col>  
            <Col className="text-center p-5">
                    <h3 className="bold text-white">Tranfers</h3>
                    <h1 className="bold text-white title">3 B</h1>
            </Col>  
            <Col className="text-center p-5">
                    <h3 className="bold text-white">Artists</h3>
                    <h1 className="bold text-white title">15 k</h1>
            </Col>                                          
        </Row>
    </div>  
    <div className="container my-10">            
                <Row align="middle">
                    <Col md={24} lg={12}>
                        <div className="p-5">
                        <h2 className="subtitle">Let's bring the metaverse to the real world</h2>
                        <p className="text-justify text-md">
                        The Metaverse is a scary subject, we know. We don't want a world where we are all plugged to our VR headsets and we have no interaction with the beautiful planet we live in. Quite the opposite, we love this world and the fresh air it offers, but we believe that it can be even better. This marriage between the old and the new is the future, and it is where we want to be.

                        </p>
                        </div>
                    </Col>
                    <Col md={24} lg={12}>
                        <img src="/assets/ar.png" alt="" className="img-fluid"/>
                    </Col>
                </Row>
                <Row align="middle">
                <Col md={24} lg={12}>
                        <img src="/assets/location.png" alt="" className="img-fluid"/>
                    </Col>                    
                    <Col md={24} lg={12}>
                        <div className="p-5">
                        <h2 className="subtitle">Enter a new age of creation</h2>
                        <p className="text-justify text-md">
                        Introducing our platform for NFT exhibition. Through our Augmented Reality technology we bring a brand new opportunity for digital artists and NFT collectors to exhibit their work. By geolocalizing each NFT, every user will be able to experience the originality and tangibility of NFTs in different areas of the world.
                        </p>
                        </div>
                    </Col>
                </Row>          
                <Row align="middle">
                    <Col md={24} lg={12}>
                        <div className="p-5">
                        <h2 className="subtitle">The NFT wave will become a Tsunami</h2>
                        <p className="text-justify text-md">
                        The hype behind this world has been crazy and it may seem like NFTs are everywhere, nevertheless, we are just scratching the surface. Mass adoption will happen, and we want you to be ready for when that happens. Come surf this incredible Tsunami with us, we ́ve never been scared of big waves.
                        </p>
                        </div>
                    </Col>
                    <Col md={24} lg={12}>
                        <img src="/assets/ar.png" alt="" className="img-fluid"/>
                    </Col>
                </Row>                      
            </div>
            <div className="">
                <div className="my-5 transparent-grey-bg p-5 customShadow">
                <h1 className="subtitle text-white text-center container ">
                    “We firmly believe that this digital asset market will be as big as or even bigger than the physical asset market in the long run”
                    </h1>
                </div>
            </div>
            <div>
                <h1 className="title text-center py-10">
                    NFT Collections
                </h1>
                <div className=" py-10 responsive-background" style={{ background: "url('/assets/nomush.jpg')"}}>
                    <Row justify="end">
                        <Col sm={24} md={12} lg={8}>
                        <div className="p-5">
                        <h1 className="subtitle text-white text-end">
                                The nomush collection
                            </h1>
                            <p className="mt-5 text-white text-end text-md">
                            This new way of exposing art will inspire artists to 
                            find new ways to make art, and we believe that many 
                            of them will start making NFTs that are adaptable to 
                            certain areas of the world, pushing their creativity 
                            to make this world more entertaining for anyone.
                            </p>
                            <div className="text-end mt-5">
                            <a href="/">
                                <button className="btn collectionButton">
                                    Link to collection
                                </button>
                            </a>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
                <div className=" py-10 responsive-background" style={{ background: "url('/assets/prism.jpg')"}}>
                    <Row justify="start">
                        <Col sm={24} md={12} lg={8}>
                        <div className="p-5">
                        <img src="/assets/prismblanc.png" alt="" className="img-fluid img-md"/>
                        <h1 className="subtitle text-white text-start mt-5">
                                The prism collection
                            </h1>
                            <p className="mt-5 text-white text-start text-md">
                            This new way of exposing art will inspire artists to 
                            find new ways to make art, and we believe that many 
                            of them will start making NFTs that are adaptable to 
                            certain areas of the world, pushing their creativity 
                            to make this world more entertaining for anyone.
                            </p>
                            <div className="text-start mt-5">
                            <a href="/">
                                <button className="btn collectionButton">
                                    Link to collection
                                </button>
                            </a>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>                
            </div>
            
        </>
    )
}