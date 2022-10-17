import React from 'react'
import {FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

export default function Footer(props){
    return(
        <div className="bg-black py-10 d-flex align-items-center">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col-1 ">
                                <h3 className="text-white m-0">
                                <FaTwitter></FaTwitter>

                                </h3>
                            </div>
                            <div className="col-1 ">
                                <h3 className="text-white m-0">
                                <FaInstagram></FaInstagram>

                                </h3>
                            </div>
                            <div className="col-1 ">
                                <h3 className="text-white m-0">
                                <FaLinkedin></FaLinkedin>

                                </h3>
                            </div>
                            <div className="col-1 ">
                                <h3 className="text-white m-0">
                                <AiOutlineMail></AiOutlineMail>

                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 text-end">
                        <button className="btn btn-outline-light">Say Hello!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}