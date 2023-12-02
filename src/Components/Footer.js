import React from "react";
import email from '../assets/images/icons8-gmail-48.png';
import github from '../assets/images/icons8-github-64.png';
import linkedin from '../assets/images/icons8-linkedin-48.png';
import insta from '../assets/images/icons8-instagram-48.png';

export const Footer = () => {
    return(
        <div className="container-fluid footer">
            <div className="container py-2">
                <div className="row">
                    <h1 className="text-center footer-logo">CodeByAbdullah</h1>
                    <h3 className="text-center py-1 text-warning">Wanna Hire me!</h3>
                    <div className="col-lg-12 col-sm-12 col-md-12"> 
                        <p className="text-center text-white">Designed and built by <span className="linear">Abdullah</span> with <span className="linear">love </span> &hearts;</p>
                        <div className="d-flex justify-content-center">
                            <a className="links" href="https://www.linkedin.com/in/abdullah-memon-7a7877256/">< img alt="" src={linkedin}/></a>
                            <a className="links" href="https://github.com/Memon-Abdullah">< img alt="" src={github}/></a>
                            <a className="links" href="mailto:abdullahmemon12564@gmail.com">< img  alt="" src={email}/></a>
                            <a className="links" href="https://www.instagram.com/talkativve_guy/">< img  alt="" src={insta}/></a>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
};

