import React from 'react';
import gaHikes from './images/ga-hikes2.png';
import portfolioGit from './images/stock-photo-mountains.png';
import scheduler from './images/scheduler.png';
import password from './images/placeholder-image-2.jpg';
import hardback from './images/librarybackground.png';
import ecommerce from './images/placeholder-image-11.jpg';
import readme from './images/placeholder-image-12.png';

export default function Projects() {
  return (
    <div>
      <h2>P&nbsp;R&nbsp;O&nbsp;J&nbsp;E&nbsp;C&nbsp;T&nbsp;S</h2>
                <div class="row">
                    <div>
                        <div>
                            <div class="container1">
                            <a href="https://amachkel.github.io/GA-hikes/"><img src={gaHikes} class="imagehover" id="mostrecent" alt="Georgia Hikes"/></a>
                                <div class="text-block1">
                                    <h3>GEORGIA HIKES</h3>
                                </div>
                            </div>
                        </div>   
                        <div>
                            <div class="container2">
                                <a href="https://github.com/Quadrilateral0/ACD-Portfolio"><img src={portfolioGit} alt="Portfolio screenshot." class="imagehover"/></a>
                                <div class="text-block2">
                                    <p>PORTFOLIO GITHUB</p>
                                </div>
                            </div> 
                            <div class="container2">   
                                <a href="https://quadrilateral0.github.io/Day-Planner/"><img src={scheduler} alt="Scheduler screenshot." class="imagehover"/></a>
                                <div class="text-block2">
                                    <p>WORKDAY SCHEDULER</p>
                                </div>
                            </div> 
                            <div class="container2"> 
                                <a href="https://quadrilateral0.github.io/Password-Generator/"><img src={password} alt="Password generator screenshot." class="imagehover"/></a>
                                <div class="text-block2">
                                    <p>PASSWORD GENERATOR</p>
                                </div>
                            </div>
                            <div class="container2"> 
                                <a href="https://a-hardback-life.herokuapp.com/"><img src={hardback} alt="A library bookshelf." class="imagehover"/></a>
                                <div class="text-block2">
                                    <p>BOOK CLUB</p>
                                </div>
                            </div>
                            <div class="container2"> 
                                <a href="https://github.com/Quadrilateral0/Ecommerce-Backend"><img src={ecommerce} alt="A screenshot from a video game with a mountain and water." class="imagehover"/></a>
                                <div class="text-block2">
                                    <p>E-COMMERCE BACKEND</p>
                                </div>
                            </div>
                            <div class="container2">
                                <a href="https://github.com/Quadrilateral0/README-Generator"><img src={readme} alt="Illustration of nine computer screens." class="imagehover"/></a>
                                <div class="text-block2">
                                    <p>README GENERATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  );
}
