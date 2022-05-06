import React from 'react';

// components
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import References from '../components/References';
import ContactForm from '../components/ContactForm';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

// About
import about_img from '../images/about.jpg';

import '../styles/main.scss';

function IndexPage() {
    return (
        <>
            <Header />
            <section id="hero" className="clear-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-uppercase">Hi! I'm Cristian</h2>
                            <h1 className="text-uppercase">A Full Stack <br />Developer</h1>
                            <p className="text-10 mb-5">Based on The Costa Rica Paradise</p>
                            <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about-me">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h4><span>About Me</span></h4>
                            <h2>Get To Know Me</h2>
                        </div>
                    </div>
                    <div className="row mb-5 flex-column-reverse flex-lg-row align-items-center align-items-lg-start">
                        <div className="col-xxl-9 col-lg-8 col-md-12 text-5">
                            <h3 className="mb-4">Hi! My Name is <u>Cristian...</u></h3>
                            <p>First of All, thank you so much for visiting my website, I'd describe myself as Senior Full Stack Developer, with over 10 years of experience developing websites, web applications and API’s for many different organizations.</p>
                            <p>Over the years I’ve worked on all kinds of projects, from simple landing pages like this, to Custom Serverless Applications, APIs, WordPress Plugins and Fully Fledged Websites, incorporating new technologies like React JS and Lambda Functions.</p>
                            <p>I am a problem solver, experienced in the full stack, from the DNS setup of a domain, all the way down to the Database Request Optimization, Server Infrastructure, and 3rd Party APIs integration, I pride myself in coming up with creative and effective solutions to problems, adding value to any team right away.</p>
                            <p>I am a High Achiever, a quick learner and a team player. I will go above and beyond what's expected from me to accomplish business goals and conquer the company's mission, mentoring up and coming talent, collaborating with team members and getting the job done.</p>
                            <p>If these are all characteristics that will benefit your team or company, Please feel free to contact me.</p>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-6 mb-4">
                            <img src={about_img} className="img-fluid shadow img-thumbnail rounded-circle" alt="About Cristian Araya" />
                        </div>
                    </div>
                    <div className="row meta text-center">
                        <div className="col-sm-6 col-lg-3">
                            <p>Name:</p>
                            <h4>Cristian Araya</h4>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <p>Email:</p>
                            <h4>cris@devinparadise.com</h4>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <p>Date of birth::</p>
                            <h4>07 Aug. 1989 (33)</h4>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <p>From:</p>
                            <h4>Costa Rica (pura vida)</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h4><span>My Skills</span></h4>
                            <h2>How Can I Help Your Next Project?</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <Skills />
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h4><span>Portfolio</span></h4>
                            <h2>Some Of My Most Recent Projects</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <Projects projectClassName="col-lg-4 col-md-6 text-center" />
                    </div>
                </div>
            </section>
            <section id="resume" className="clear-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h2>Interested In Working With Me?</h2>
                            <a href="https://devinparadise.s3.us-east-2.amazonaws.com/Cristian-Araya-Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">Download My Resume</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="references">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h4><span>References</span></h4>
                            <h2>A Word From My Colleagues & Managers</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <References />
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <h2>Let's get in touch</h2>
                            <p className="text-5">I enjoy discussing new projects, problems and possible solutions. Please share as much info as you like, I'll be prompt to reply.</p>
                            <p className="text-5">Timezone: America/Costa Rica UTC -6</p>
                            <ul className="list-inline socials">
                                <li className="list-inline-item"><a href="https://www.facebook.com/Cristian0789" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/dev_in_paradise/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/_caraya" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li className="list-inline-item"><a href="https://github.com/caraya0789" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                            </ul>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div className="container text-center">
                    <p>Copyright © 2022 DevInParadise.com - All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default IndexPage;