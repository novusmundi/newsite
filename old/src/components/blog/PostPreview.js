import React from 'react'
import {Row, Col,Avatar, List} from 'antd'

export default function PostPreview({data}){
    return(
        <div className="container">
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
              <div className="w-100">
                <Row gutter={[16,16]}>
                    <Col md={24} lg={4}>
                        <Avatar shape="square"size={100} src={item.image} />
                    </Col>
                    <Col md={24} lg={20}>
                        <a href="https://ant.design" className="bold text-black">{item.title}</a>
                        <p className="mt-2">
                            {item.content.slice(0,140) + "..."}
                        </p>
                    </Col>
                </Row>   
              </div>
          </List.Item>
          )}
        />            
        </div>

        // <div className="container p-2 shadow">
        //     <Row gutter={[16,16]}>
        //         <Col>
        //             <img src={image} alt="" className="img-fluid"/>
        //         </Col>
        //         <Col span={18}>
        //             <h6 className="bold">{title}</h6>
        //             <p>
        //                 {reducedText}
                        
        //             </p>
        //         </Col>
        //     </Row>


        // </div>
    )
}