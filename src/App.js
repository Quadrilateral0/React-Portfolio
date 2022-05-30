import React from 'react';
import './style.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from  './components/Footer';

export default function App() {
  return (
    <div>

    <section id="home" class="header" aria-label="A peachy mountain view.">
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

    <section  id="contact" class="sectionbox">
    <Contact />
    </section>

    <section class="footer">
    <Footer />
    </section>

    </div>
  );
}
