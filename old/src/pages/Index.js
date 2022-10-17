import React from 'react'
import Video from '../components/home/Video'
import EmbedVideo  from '../components/general/EmbedVideo'
import CardPeople from "../components/general/CardPeople"
import { Carousel } from 'react-responsive-carousel';
import {GrNext, GrPrevious} from 'react-icons/gr'
import Footer from '../components/general/Footer'
import Header from '../components/general/Header'
import {Row,Col} from 'antd'
export default function Index(){
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    const indicatorStyles =  {
        background: '#dfdfdf',
        width: 40,
        height: 20,
        display: 'inline-block',
        margin: '0 8px',
    };

    return(
        <div>
            <Header></Header>
            <Video></Video>

            <div className=" fullScreen black-bg d-flex align-items-center justify-content-center">
                <div>
                <div className="my-10 container">
                <div className=" row ">
                    <div className="col-md-12 col-lg-6">
                    <h1 className=" title-xl text-white">Nomu Labs</h1>
                    <h1 className="text-white mt-5 ">
                        Cool quote blab blah blah <br/>
                        blab blah blah.

                    </h1>                
                    </div>
                    <div className="col-md-12 col-lg-6 text-md-center text-lg-end">
                        <img src="/logo-white.png" alt="" className="img-fluid logo-lg"/>
                    </div>

                </div>
                </div>
                <div className="my-10">
                <EmbedVideo src={"/assets/header-animation.mp4"} className="video img-fluid w-100 mt-5"></EmbedVideo>

                </div>
                </div>
            </div>
            <div className="fullScreen  d-flex align-items-center justify-content-center">
            <div className="container">
                <Carousel 
                autoPlay={true}
                interval={2000}
                showArrows={false}
                swipeable={true}
                infiniteLoop={true}
                showStatus={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: 'rgba(0, 0, 0, 0.8)', height:10}}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" className="btn" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
                            <span className="text-black">
                                <GrPrevious></GrPrevious>    
                            </span>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" className="btn" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                            <span className="text-black">
                                <GrNext></GrNext>    
                            </span>
                        </button>
                    )
                }
                >
                    <div key="key1" className=" p-3">
                        <Row align="middle" justify="space-between">
                                <Col lg={12} md={24} className="text-start">
                                    <h1 className=" title-xl ">Consulting</h1>
                                    <p className=" mt-5">
                                    This world is confusing, and taking your first steps in it is hard. We want to help businesses and individuals unlock all of their potential with this technology. 
                                    </p>
                                    <button className="mt-3 btn btn-outline-dark">Learn More</button>                   
                                </Col>
                                <Col lg={12} md={24} className="">
                                    <img src="/assets/earth.jpg" alt="" className="img-fluid p-4"/>
                                </Col>
                        </Row>
                    </div>
                    <div key="key2" className="p-3">
                    <Row align="middle" justify="space-between">
                                <Col lg={12} md={24} className="text-start">
                                    <h1 className=" title-xl ">Development</h1>
                                    <p className=" mt-5">
                                    Implementing Web3 solutions requires a high level of expertise and technical know-how. This technology needs to be of easy access for the user, as it is not easy to navigate. We offer personalized solutions, so your target audience can easily utilize the new products that you will be offering.
                                    </p>
                                    <button className="mt-3 btn btn-outline-dark">Learn More</button>                   
                                </Col>
                                <Col lg={12} md={24} className="">
                                    <img src="/assets/earth2.jpg" alt="" className="img-fluid p-4"/>
                                </Col>
                        </Row>
                    </div>
                    <div key="key3" className="p-3">
                    <Row align="middle" justify="space-between">
                                <Col lg={12} md={24} className="text-start">
                                    <h1 className=" title-xl ">Design</h1>
                                    <p className=" mt-5">
                                    The art industry is one that is hard to navigate, specially for artists trying to start selling their pieces. The NFT art market is not different, let us guide you into this world, both as a collector and an artist. Give us a call and we will let you know how to enter this fascinating world. 
                                    </p>
                                    <button className="mt-3 btn btn-outline-dark">Learn More</button>                   
                                </Col>
                                <Col lg={12} md={24} className="">
                                    <img src="/assets/earth3.jpg" alt="" className="img-fluid p-4"/>
                                </Col>
                        </Row>
                    </div>                    
                </Carousel>
                </div>                
            </div>
            <div className="fullScreen bg-white-grey d-flex justify-content-center align-items-center">
                <div className="container my-10">
                    <h1 className="title-xl text-black ">Top Clients</h1>
                    <div className="row d-flex justify-content-center align-items-middle">
                        <div className="col-md-12 col-lg-4 p-2">
                            <img src="/assets/clients/nbn23.png" alt="" className="img-fluid clientImage"/>
                        </div>
                        <div className="col-md-12 col-lg-4 p-2">
                            <img src="/assets/clients/teatroKapital.png" alt="" className="img-fluid clientImage"/>
                        </div>
                        <div className="col-md-12 col-lg-4 p-2">
                            <img src="/assets/clients/tgd.png" alt="" className="img-fluid clientImage"/>
                        </div>
                        <div className="col-md-12 col-lg-4 p-2">
                            <img src="/assets/clients/amsar.png" alt="" className="img-fluid clientImage"/>
                        </div>
                        <div className="col-md-12 col-lg-4 p-2">
                            <img src="/assets/clients/fabrik.png" alt="" className="img-fluid clientImage"/>
                        </div>
                    </div>
                </div>
            </div>
            <CardPeople></CardPeople>
            <Footer></Footer>
        </div>
    )
}