import React from "react";
import email from '../assets/images/icons8-gmail-48.png';
import github from '../assets/images/icons8-github-64.png';
import linkedin from '../assets/images/icons8-linkedin-48.png';
import insta from '../assets/images/icons8-instagram-48.png';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return(
        <div className="container-fluid footer">
            
            <div className="row">
                <h3 className="text-center py-1 text-warning">Wanna Hire me!</h3>
                <div className=" d-flex  col-lg-4 col-sm-12 col-md-4">
                    <Link className="link__footer ms-3" to={'/'}>Home</Link>
                    <Link className="link__footer ms-3" to={'/About'}>About</Link>
                    <Link className="link__footer ms-3" to={'/projects'}>Projects</Link>
                    <Link className="link__footer ms-3" to={'/contact'}>Contact</Link>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-4"> 
                    <p className="text-center text-white">Designed and built by <span className="linear">Abdullah</span> with <span className="linear">love </span> &hearts;</p>
                    <div className="d-flex justify-content-center">
                        <a className="links" href="https://www.linkedin.com/in/abdullah-memon-7a7877256/">< img className="img-fluid" alt="" src={linkedin}/></a>
                        <a className="links" href="https://github.com/Memon-Abdullah">< img className="img-fluid" alt="" src={github}/></a>
                        <a className="links" href="mailto:abdullahmemon12564@gmail.com">< img className="img-fluid"  alt="" src={email}/></a>
                        <a className="links" href="https://www.instagram.com/talkativve_guy/"><img className="img-fluid" alt="" src={insta}/></a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-4 text-danger text-center fs-6 ">
                    abdullahmemon12564@gmail.com
                </div>
            </div>
        </div>
            
        
    )
};

