import React,{} from 'react'
import {Row,Col} from 'antd'

export default function NftBanner(props){
    return(
        <div className="fullScreen responsiveBackground" style={{ background: "url('/assets/prism.jpg')"}}>
            <h1 className="title text-center py-5 text-white">
                NFTs
            </h1>

            <div className="transparent-grey-bg mt-5">
            <Row justify="center">
                <Col md={20} lg={14}>
                    <p className="text-justify text-md text-white p-5">
                    The NFT sector is growing at unparalleled rates and every day it seems more clear that they are here to stay.
                    Inits simplest definition,an NFT, Non-Fungible Token, is a digital asset backed by blockchain
                    technology. Each NFT has a unique digital identifier that cannot be copied, substituted, or
                    subdivided, and that is used to certify authenticity and ownership.
                    The big break through here,of course,is the blockchain aspect.
                    Previously, digital assets were largely worthless because they could be replicated and
                    distributed,without anyone knowing what the "original" digital asset was, there by rendering
                    the original worthless...
                    But with the blockchain and its signature immutable digital ledger, artists can now create
                    digital assets that can be validated as originals, there by giving those originals the same
                    value as say, an original art piece.

                    </p>                
                </Col>
            </Row>
            </div>
        </div>
    )
}
