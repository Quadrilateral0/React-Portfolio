import React from 'react';
import avatar from './images/amanda-avatar.svg';
import linkedin from './images/LI-In-Bug.png';
import github from './images/GitHub-Mark-Light-64px.png';

export default function Contact() {
    return (
        <div>
            <h2>C&nbsp;O&nbsp;N&nbsp;T&nbsp;A&nbsp;C&nbsp;T</h2>
            <div id="icon-container">
                <figure id="avatar">
                    <img src={avatar} alt="Avatar of Amanda." />
                    <p><b>Email:</b> amandacdulaney@gmail.com</p>
                </figure>
                <div id="icons">
                    <a href="https://www.linkedin.com/in/amandacdulaney/"><img src={linkedin} alt="LinkedIn." /></a>
                    <a href="https://github.com/Quadrilateral0"><img src={github} alt="GitHub." /></a>
                </div>
            </div>
        </div>
    );
}