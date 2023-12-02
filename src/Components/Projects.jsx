import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import p1 from '../assets/images/Screenshot (1223).png';
import p2 from '../assets/images/Screenshot (1224).png';
import p3 from '../assets/images/Screenshot (1225).png';
import p4 from '../assets/images/Screenshot (1226).png';
import p5 from '../assets/images/Screenshot (1227).png';
import p6 from '../assets/images/Screenshot (1228).png';
import p7 from '../assets/images/Screenshot (1229).png';
import p8 from '../assets/images/p1.png';
import p9 from '../assets/images/project.png';
import github from '../assets/images/github.png';
import p10 from '../assets/images/timetable.png';
import game from '../assets/images/game.png';
export const Projects = ()=>{
    return(
        <div className="container-fluid mt-5">
            <div className="container mt-5">
                <div className="row mt-5">
                        <div className="heading mt-5 mb-4"
                            style={{alignItems:"center", textDecoration:"none", color:"white", display:"flex", fontSize:"36px", fontWeight:"500", gap: "10px"}}>
                            Projects 
                            <div className="line" style={{border:"0.25px solid white", width: "70px"}}></div>
                        </div>
                        <h5 className="mb-4 text-white">Some Things I've built so far</h5>
                    <div className="col d-flex justify-content-around flex-wrap align-items-center flex-row">
                        <div className="projecs">
                            <img src={p1} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Todo app</h3>
                            <h6 className="card-description">Using functional component in react and passing the props through them i have made this app have functionality add update and delete.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/react-Todo.git">
                                < img className="button" src={github} alt="..."/> View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={p2} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Digital clock</h3>
                            <h6 className="card-description">Using state hook and useffect in react and the function of time and date converting it into string then it is goint to be update the time.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/react_digital-clock.git">
                                < img className="button" src={github} alt="..."/> View Code
                            </a>
                            
                        </div>
                        <div className="projecs">
                            <img src={p3} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Portfolio</h3>
                            <h6 className="card-description">Using simple html css.bootstrap and vanilla javascript I created this beatuiful Portfolio project in this i have manage the action of form.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/MyPortfolio.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={p4} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Analog clock</h3>
                            <h6 className="card-description">Using html css and simple js i have used the ternary opertor to manage the  functionality of hands and i have used the function fo getting date.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/Analog_clock.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={p5} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Calculator</h3>
                            <h6 className="card-description">Using html css and js I have made this calculator adding envent listenner and simple using eval method to evelauate the number or any input in it.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/calculator.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={p6} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Digital clock</h3>
                            <h6 className="card-description">Using html css and javaScript I have made this digital clock used simple method of date and used ternary for managing pm and am.</h6>  
                            <a className="code-link" href="https://github.com/Memon-Abdullah/digital-clock.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={p7} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Todo list</h3>
                            <h6 className="card-description">Using html css and javaScript I have made this todo list the functionality ia add and delete using local storage and the data will be saved.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/to-do_app.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>   
                        </div>
                        <div className="projecs">
                            <img src={p8} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Landing page</h3>
                            <h6 className="card-description">Using simple html and css I created simple landing page where this is taken from the health care sevices page a clone of it.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/trainig-services.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={p9} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Festival Website</h3>
                            <h6 className="card-description">Using html and css grated a mutlipages website a clone or templete of yearly festival names ismi 2023 have five pages home about price contact etc.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/festival.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={p10} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Time table</h3>
                            <h6 className="card-description">Using html and css greated a perfect design of Time table of our university teacher using table and col span and row span.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/timetable.git">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        <div className="projecs">
                            <img src={game} alt="project pic" className="img-fluid rounded"/><h3 className="card-title">Tic Tac Toe</h3>
                            <h6 className="card-description">Using html and css greated a perfect design of Time table of our university teacher using table and col span and row span.</h6>
                            <a className="code-link" href="https://github.com/Memon-Abdullah/lab6DOM/tree/master/task%207">
                                < img className="button" src={github} alt="..."/>View Code
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}