import React from 'react'
import {FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
export default function CardPeople(props){
    return(
        <div className="fullScreen  bg-grey d-flex justify-content-center align-items-center">
            <div className="container">
                <h1 className="title-xl text-white ">The Team</h1>
            <div className="row mt-5 ">
                <div className="col-md-12 col-lg-3 m-0">
                    <div className="customCard mx-auto  card0 my-3">
                        <div className="customBorder">
                        <h2>Pablo Astiarraga</h2>
                        <p className="mt-3 cardDescription">
                            Head of Design
                        </p>
                        <div className="icons">
                            <FaTwitter className="fa"></FaTwitter>
                            <FaInstagram className="fa"></FaInstagram>
                            <FaLinkedin className="fa"></FaLinkedin>
                            <BsGlobe className="fa"></BsGlobe>
                            <AiOutlineMail className="fa"></AiOutlineMail>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-3 m-0">
                    <div className="customCard mx-auto  card1 my-3">
                        <div className="customBorder">
                        <h2>Borja Colom</h2>
                        <p className="mt-3 cardDescription">
                        Meta-Architect 
                        </p>
                        <div className="icons">
                            <FaTwitter className="fa"></FaTwitter>
                            <FaInstagram className="fa"></FaInstagram>
                            <FaLinkedin className="fa"></FaLinkedin>
                            <BsGlobe className="fa"></BsGlobe>
                            <AiOutlineMail className="fa"></AiOutlineMail>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3 m-0">
                    <div className="customCard mx-auto  card2 my-3">
                        <div className="customBorder">
                        <h2>Javier Mateache</h2>
                        <p className="mt-3 cardDescription">
                            Business Developer
                        </p>
                        <div className="icons">
                            <FaTwitter className="fa"></FaTwitter>
                            <FaInstagram className="fa"></FaInstagram>
                            <FaLinkedin className="fa"></FaLinkedin>
                            <BsGlobe className="fa"></BsGlobe>
                            <AiOutlineMail className="fa"></AiOutlineMail>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3  m-0">
                    <div className="customCard mx-auto  my-3 card3">
                        <div className="customBorder">
                        <h2>Luis Pozo</h2>
                        <p className="mt-3 cardDescription">
                            Head of development
                        </p>
                        <div className="icons">
                            <FaTwitter className="fa"></FaTwitter>
                            <FaInstagram className="fa"></FaInstagram>
                            <FaLinkedin className="fa"></FaLinkedin>
                            <BsGlobe className="fa"></BsGlobe>
                            <AiOutlineMail className="fa"></AiOutlineMail>
                        </div>
                        </div>
                    </div>
                </div>                
                </div>
        </div>
    </div>

    )
}