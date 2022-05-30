import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

export default function App() {
  return (
    <div>
    <section id="header" class="sectionbox">
    <Header />
    </section>

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
