import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import p from '../assets/images/python.png';
import l7 from '../assets/images/js.ba0a928588f389c91981.png';
import l4 from '../assets/images/react.20adfb35ae6a6e5817bf.png';
import l6 from '../assets/images/notion.png';
import l2 from '../assets/images/figma2.png';
import l10 from '../assets/images/h.png';
import l11 from '../assets/images/c.png';
import l5 from '../assets/images/github2.0144fe56718f3af01a9f.png';
import l1 from '../assets/images/mongo.png';
import node from '../assets/images/node.e71346fe0fec16ec5f6e.png';
export const About = ()=>{
   return(
    <div>
        <div className="container-fluid mt-5">
        <div id="About" className="container mb-5 pt-2">
                <div className="row">
                    {/* first column in row one of about me  */}
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-6">
                        <div className="heading mt-5"
                        style={{alignItems:"center", textDecoration:"none", color:"#331C52", display:"flex", fontSize:"36px", fontWeight:"500", gap: "10px"}}>
                        About me
                        <div className="line" style={{border:"0.25px solid #291C3A", width: "70px"}}></div>
                        </div>
                        <p style={{fontSize:"25px"}}>As a web developer I am responsible for designing and developing web pages.
                            My primary focus is to create responsive user friendly experiences that meet the needs
                            of a diverse online audience. 
                        </p>
                    </div>
                     {/* second column of row one in about me  */}
                    <div class="col col-12 col-md-12 col-sm-12 col-lg-6"></div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12"></div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="heading mt-5 mb-4"
                            style={{alignItems:"center", textDecoration:"none", color:"#331C52", display:"flex", fontSize:"36px", fontWeight:"500", gap: "10px"}}>
                            My Skills
                            <div className="line" style={{border:"0.25px solid #291C3A", width: "70px"}}></div>
                        </div>
                            <h6 className="text-center">Technologies I've been working with recently </h6>
                            <div className="d-flex justify-content-around flex-wrap mb-4 mt-4">
                                <img className="tools" src={l10} alt="" height="50"/>
                                <img className="tools" src={l11} alt="" height="50"/>
                                <img className="tools" src={l2} alt="" height="50"/>
                                <img className="tools" src={l4} alt="" height="50"/>
                                <img className="tools" src={l6} alt="" height="50"/>
                            </div>
                            <div className="d-flex justify-content-around flex-wrap">
                                <img  className="tools" src={l7} alt="" height="50"/>
                                <img  className="tools" src={p} alt="" height="50"/>
                                <img  className="tools" src={l5} alt="" height="50"/>
                                <img  className="tools" src={l1} alt="" height="50"/>
                                <img  className="tools" src={node} alt="" height="50"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}