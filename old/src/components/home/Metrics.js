import React from 'react'
import {Row, Col} from 'antd'

export default function Metrics(props){
    return(
        <div className=" shadow-lg black-bg  w-100">
        <Row justify="center" align="middle">
            <Col className="text-center p-5">
                    <h3 className="bold text-white">NFTs Released</h3>
                    <h1 className="bold text-white title">20 M</h1>
                    <p className="text-white text-md">
                    20.045.600 
                    </p>
            </Col>  
            <Col className="text-center p-5">
                    <h3 className="bold text-white">NFTs Released</h3>
                    <h1 className="bold text-white title">20 M</h1>
                    <p className="text-white text-md">
                    20.045.600 
                    </p>
            </Col>  
            <Col className="text-center p-5">
                    <h3 className="bold text-white">NFTs Released</h3>
                    <h1 className="bold text-white title">20 M</h1>
                    <p className="text-white text-md">
                    20.045.600 
                    </p>
            </Col>                                          
        </Row>
    </div>        
    )
}
