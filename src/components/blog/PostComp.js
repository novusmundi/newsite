/* eslint-disable */
import React from 'react'
import {Row, Col} from 'antd'
import ReactMarkdown from 'react-markdown'
import PostPreview from './PostPreview'
const url = "https://api.flotiq.com/image/0x0/"
const squareUrl ="https://api.flotiq.com/image/100x100/"
const examplePosts = [
    {
        image:"https://api.flotiq.com/image/100x100/_media-e67860e9-98a1-4432-ae8d-69ca692375b2.png",
        title:"How to explain blockchain to your grandma",
        link:"http://localhost:3000/blog/blogpost-203949",
        content:"Everybody seems to be talking about the Blockchain, trying to use it as a conversation starter, or as the reason to rant about why the future is going to be so different from the terrible unfair world that we have now. ¨Elon Musk said Doge coin is going to be the currency of the future¨ and you just nod trying to understand what is a Doge and how in the world it could be considered a coin.",
        hastags:[
            "blockchain",
            "nft",
            "education"
        ]
    },
    {
        image:"https://api.flotiq.com/image/100x100/_media-e67860e9-98a1-4432-ae8d-69ca692375b2.png",
        title:"How to explain blockchain to your grandma",
        link:"http://localhost:3000/blog/blogpost-203949",
        content:"Everybody seems to be talking about the Blockchain, trying to use it as a conversation starter, or as the reason to rant about why the future is going to be so different from the terrible unfair world that we have now. ¨Elon Musk said Doge coin is going to be the currency of the future¨ and you just nod trying to understand what is a Doge and how in the world it could be considered a coin.",
        hastags:[
            "blockchain",
            "nft",
            "education"
        ]
    },
    {
        image:"https://api.flotiq.com/image/100x100/_media-e67860e9-98a1-4432-ae8d-69ca692375b2.png",
        title:"How to explain blockchain to your grandma",
        link:"http://localhost:3000/blog/blogpost-203949",
        content:"Everybody seems to be talking about the Blockchain, trying to use it as a conversation starter, or as the reason to rant about why the future is going to be so different from the terrible unfair world that we have now. ¨Elon Musk said Doge coin is going to be the currency of the future¨ and you just nod trying to understand what is a Doge and how in the world it could be considered a coin.",
        hastags:[
            "blockchain",
            "nft",
            "education"
        ]
    }
]
export default function PostComp({title, content, headerImage}){
    const headerImageUrl = url + headerImage[0].dataUrl.split("/").pop() + ".png" 
    const squareImageUrl = squareUrl + headerImage[0].dataUrl.split("/").pop() + ".png" 
    console.log(squareImageUrl)
    return(
        <div>
            <div className="post-header py-5 mt-5">
                <div className="container">
                <Row  align="bottom" gutter={[16,16]}>
                    <Col >
                    </Col>
                    <Col>
                        <img src="/logo-white.png" alt="" className="img-fluid box-logo"/>
                    </Col>
                    <Col>
                        <h3 className="text-white thin m-0">Powered by Nomu Labs</h3>
                    </Col>
                </Row>
                </div>
            </div>
            <div className="mt-10">

            <Row justify="space-between">
                
                <Col span={4}>
                </Col>
                <Col lg={12} md={24} >
                <div className="container">
                <h1 className="bold">
                    {title}
                </h1>
                <img src={headerImageUrl} alt="Header Image" className="img-fluid mt-5"/>

                <div className="mt-5">
                <ReactMarkdown className="blog-text">
                    {content}
                </ReactMarkdown>
                </div>
                </div>

                </Col>
                <Col lg={8} md={24} className="">
                <div className="mt-10">
                    <h3 className="container">Suggested Posts</h3>
                    <div>
                        <PostPreview data={examplePosts}>

                        </PostPreview>
                    </div>
                </div>
                </Col>
            </Row> 
            </div> 
          
        </div>
    )
}