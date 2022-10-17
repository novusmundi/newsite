import React,{} from 'react'
import {Row,Col} from 'antd'

export default function ProblemSolution(props){
    return(
        <div className=" responsiveBackground pb-15" style={{ background: "url('/assets/prism.jpg')"}}>
            <h1 className="title text-center py-10 text-white">
                The Problem & Solution             
            </h1>

            <div className="transparent-grey-bg">
            <Row justify="center">
                <Col md={20} lg={14}>
                    <div className="p-5">
                    <p className="text-justify text-md text-white">
                    What is the current issue with NFTs? As of right now one of the only ways to view and enjoy your NFTs is to visualize
                    your digital file on your computer screen, and the only way to share it with the world is to send copies of your NFT 
                    to the world on your social media accounts, marketplaces or webpage.
                    </p>
                    <p className="text-justify text-md text-white">
                    Nomu is an ecosystem where the virtual and the physical intertwine.
                    It is a platform through which the owners of NFTs will be able to share their creations and pieces with the world as 
                    if they were traditional works of art. We aim to allow you to expose your NFTs in a specific place and time anywhere within our planet. 
                    We want to make out of our beautiful planet a big exposition room where creators can let their creativity flow freely, without barriers.
                    </p>    
                    </div>            
                </Col>
            </Row>
            </div>
        </div>
    )
}
