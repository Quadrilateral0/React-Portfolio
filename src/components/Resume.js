import React from 'react';
import resume from './images/resume.png';
import resumeDownload from './images/Amanda Dulaney - 2022 Tech Resume.pdf';

export default function Resume() {
  return (
    <div>
     <h2>R&nbsp;E&nbsp;S&nbsp;U&nbsp;M&nbsp;E&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;P&nbsp;R&nbsp;O&nbsp;F&nbsp;I&nbsp;C&nbsp;I&nbsp;E&nbsp;N&nbsp;C&nbsp;I&nbsp;E&nbsp;S</h2>
            <div class="row">
                <div>
                    <div>
                        <div class="container1">
                        <a href={resumeDownload}><img src={resume} alt="Amanda's resume." class="imagehover" id="mostrecent"/></a>
                            <div class="text-block1">
                                <h3>CLICK FOR PDF</h3>
                            </div>
                        </div>
                        <div class="container2">
                            <br></br>
                            <li><i>Front End:</i> HTML5, CSS3, Bootstrap, Bulma, Handlebars</li>
                            <br></br>
                            <li><i>Back End:</i> JavaScript ES6+, jQuery, Node.JS, NPM, Express.JS, mySQL</li>
                            <br></br>
                            <li><i>Concepts:</i> RESTful APIs, Object Oriented Programming, Object-Relational Mapping</li>
                            <br></br>
                            <li><i>Tools:</i> Git, GitHub, VSCode, Insomnia, Airtable, Monday</li>
                            <br></br>
                        </div>
                    </div> 
                </div>
            </div>   
    </div>
  );
}