import React from 'react'
import Layout from '../components/general/Layout'
import NftBanner from '../components/home/NftBanner'
import Foundation from '../components/home/Foundation'
import ProblemSolution from '../components/home/ProblemSolution'
import Metrics from '../components/home/Metrics'
import Artists from '../components/home/Artists'

export default function Home(props){
    return(

            <Layout>
                <div className="height-80 responsiveBackground"  style={{ background: "url('/assets/animation.png')"}}>

                </div>
                <div className="">
                <div className="mb-20 transparent-grey-bg p-5 tb-shadow">
                <h1 className="subtitle text-white text-center container ">
                    “We firmly believe that this digital asset market will be as big as or even bigger than the physical asset market in the long run”
                    </h1>
                </div>
                </div>
                <NftBanner></NftBanner>
                <Foundation></Foundation>
                <Metrics></Metrics>
                <ProblemSolution></ProblemSolution>
                <Artists></Artists>
            </Layout>
    )
}

