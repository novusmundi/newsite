import React from 'react'
import {Row, Col} from 'antd'

export default function Foundation(props){
    return(
        <div className="container my-10">
            <h1 className="title text-center">
                The Foundations
            </h1>
            <p className="text-center text-lg text-thin mt-5">
                Share your NFTs with the world through the power of the Artificial Intelligence & Augmented Reality.
            </p>
            
            <div className="mt-10">
                <Row align="middle">
                    <Col md={24} lg={12}>
                        <div className="p-5">
                        <h2><b>Augmented Reality</b></h2>
                        <p className="text-justify text-md">
                        AR technology provides the user an
                        interactive real-world experience in which
                        the everyday objects that reside within
                        the world are enhanced by computer
                        generated files in theform of photos,
                        videos,3D objects or sounds. Through this
                        technology we will be able to bring your
                        NFTs to life in your favorite locations of the
                        world

                        </p>
                        </div>
                    </Col>
                    <Col md={24} lg={12}>
                        <img src="/assets/ar.png" alt="" className="img-fluid"/>
                    </Col>
                </Row>
                <div className="my-md-5"></div>
                <Row align="middle">
                <Col md={24} lg={12}>
                        <img src="/assets/location.png" alt="" className="img-fluid"/>
                    </Col>                    
                    <Col md={24} lg={12}>
                        <div className="p-5">
                        <h2><b>Geolocation</b></h2>
                        <p className="text-justify text-md">
                        With existing GPS and tracking
                        technology we will be able to place your
                        NFTs at the exact location you want
                        them to be. Be it at your favorite park or
                        in the most transited street of the city
                        you reside in so your friends and
                        thousands of other people can see it.


                        </p>
                        </div>
                    </Col>
                </Row>                
            </div>
            
        </div>
    )
}