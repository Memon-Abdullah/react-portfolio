import React from "react";
// import { Typewriter } from "./Typewriter";
// import ReactTyped from "react-typed";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/images/brand.png';

import hand from '../assets/images/hi.png';
import linkedIn from '../assets/images/linkedIn.712c4ce3d6be06644d11.png';
import github from '../assets/images/github2.0144fe56718f3af01a9f.png';
import cv from '../assets/images/cv.pdf';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-md-6 col-sm-12 col-lg-6">
            <div>
              <h3 style={{color:"#FFFFFF"}}>Hello <img src={hand} alt="hi" style={{width:"30px"}}/>,</h3>
              <h1 style={{color:"#DCCFED",fontSize:"4rem"}}>{"I'm Abdullah"}</h1>
              <h1 style={{color:"#DCCFED"}}>
                <TypeAnimation sequence={['A frontend Developer ',1000, 'ML Enthusiastic',1000]} wrapper="span" speed={50}
                style={{fontSize:"1em", display:"inline-block"}} repeat={Infinity}/>
                  {/* <Typewriter strings={["A frontend Developer, ML Enthusiastic"]} typeSpeed={1900} loop /> */}
              </h1>
              <h3 className="text-white mt-3"> I build things for Web</h3>
            </div>
            <div className=" mt-5 d-flex flex-wrap mb-5">
              <a href={cv} download='' className="ms-5">
                <button className="resume" >Resume</button>
              </a>
              <Link to={'contact'} className="ms-3 my-5 my-lg-0">
                <button className="contact-me ">Contact me</button>
              </Link>
              
            </div>
             <div className="mt-5 d-flex justify-content-center  mb-5">
              <a  href="https://www.linkedin.com/in/abdullah-memon-7a7877256/"><img className="img-fluid socail ms-5" src={linkedIn} alt="..."/></a>
              <a  href="https://github.com/Memon-Abdullah"><img className="img-fluid socail ms-2" src={github} alt="..."/> </a>
              </div>       
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={profile} alt="profile" className="img-fluid image" /> 
          </div>
        </div>
      </div>
    </div>
    
    
    
  );
};
