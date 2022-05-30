import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

export default function App() {
  return (
    <div>
    <header id="home" class="header" aria-label="A peachy mountain view.">
        <h1>
            AMANDA&nbsp;&nbsp;C&nbsp;&nbsp;DULANEY
        </h1>
        <nav aria-label="header navigation">
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resum&eacute;</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about" class="sectionbox">
    <About />
    </section>

    <section  id="projects" class="sectionbox">
    <Projects />
    </section>

    <section  id="resume" class="sectionbox">
    <Resume />
    </section>

    </div>
  );
}
