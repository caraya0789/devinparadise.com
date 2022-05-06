import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/main.scss';

// Portfolio
import debt_proj from '../images/debt.jpg';
import mortgage_proj from '../images/mortgage.jpg';
import funnelbots_proj from '../images/funnelbots.jpg';
import sircostarica_proj from '../images/sircostarica.jpg';
import wearables_proj from '../images/wearables.jpg';
import extensions_proj from '../images/extensions.jpg';
import litebrowser_proj from '../images/litebrowser.jpg';

// About
import about_img from '../images/about.jpg';

// skills
import php_icon from '../images/php.png';
import html_icon from '../images/html.png';
import react_icon from '../images/react.png';
import wp_icon from '../images/wp.png';
import laravel_icon from '../images/laravel.png';
import aws_icon from '../images/aws.png';
import api_icon from '../images/api.png';
import python_icon from '../images/python.png';
import git_icon from '../images/git.png';
import tools_icon from '../images/tools.png';
import ideas_icon from '../images/ideas.png';

// references
import jarrod_img from '../images/jarrod.jpg';
import grace_img from '../images/grace.jpg';
import abner_img from '../images/abner.jpg';
import laura_img from '../images/laura.jpg';
import ale_img from '../images/ale.jpg';
import diego_img from '../images/diego.jpg';

function IndexPage() {

    const [headerFixed, setHeaderFixed] = useState( false );

    useEffect( () => {
        window.addEventListener( 'scroll', handleScroll, { passive: true } );
    }, [] );

    const handleScroll = function( event ) {
        if( !headerFixed && window.pageYOffset > 10 ) {
            setHeaderFixed( true );
        }
        if( headerFixed && window.pageYOffset <= 10 ) {
            setHeaderFixed( false );
        }
    };

    return (
        <>
            <header class={headerFixed ? 'fixed' : ''} id="header">
                <div className="container d-flex justify-content-between">
                    <a href="/" className="logo">Dev In Paradise</a>
                    <a href="#contact" className="phone btn btn-primary">Get In Touch</a>
                </div>
            </header>
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
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={php_icon} alt="PHP" className="mb-4" />
                            <h3>PHP/MySQL</h3>
                            <p>I've been doing PHP from the beginning of my career, from simple forms to fully fledged web applications, that are secure and scalable.</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={html_icon} alt="PHP" className="mb-4" />
                            <h3>HTML/CSS</h3>
                            <p>I'm able to translate beautiful designs into functional html and css, with attention to detail and optimization in mind, for all devices and screen sizes</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={react_icon} alt="PHP" className="mb-4" />
                            <h3>React JS</h3>
                            <p>I'm highly skilled at reactjs, redux, and hooks, implementing functional and fully testable single page applications or components, that integrate with backend services</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={wp_icon} alt="PHP" className="mb-4" />
                            <h3>WordPress</h3>
                            <p>I'm able to plan, implement and deploy custom WordPress Themes and Plugins, and optimized existing websites that take advantage of this powerful CMS platform</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={laravel_icon} alt="PHP" className="mb-4" />
                            <h3>Laravel</h3>
                            <p>I can design, develop, test and deploy fully fledged web applications and API’s with Laravel, taking advantage of all the packages and libraries this incredible framework provides.</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={aws_icon} alt="PHP" className="mb-4" />
                            <h3>AWS</h3>
                            <p>I able to deploy custom web application to the cloud, either to a custom EC2 instance or a completely serverless solution using Lambda and S3</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={api_icon} alt="PHP" className="mb-4" />
                            <h3>API</h3>
                            <p>Either creating a custom API to connect 2 different systems or implementing custom 3rd party API’s I understand the power of REST, JSON and even old school SOAP implementations.</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={python_icon} alt="PHP" className="mb-4" />
                            <h3>Python</h3>
                            <p>I can create custom Python Scripts to gather, process, modify and deliver data from any website, using either basic requests and beautifulsoup, or complex selenium implementations</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={git_icon} alt="PHP" className="mb-4" />
                            <h3>Git</h3>
                            <p>Git is Core to my development process, from keeping a record of changes I’ve made, to working with team members, merging branches and deploying products to the cloud.</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={tools_icon} alt="PHP" className="mb-4" />
                            <h3>Other Skills</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item tag">Load Optimization</li>
                                <li className="list-inline-item tag">Cloudflare</li>
                                <li className="list-inline-item tag">Google API’s</li>
                                <li className="list-inline-item tag">Linux</li>
                                <li className="list-inline-item tag">Google Analytics</li>
                                <li className="list-inline-item tag">NodeJS</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-4 skill text-center">
                            <img src={ideas_icon} alt="PHP" className="mb-4" />
                            <h3>* Web Architect</h3>
                            <p>The most important skill of all, marring all the of the above into creative solutions to complex business problems. </p>
                        </div>
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
                        <div className="col-lg-4 col-md-6 project text-center">
                            <img src={debt_proj} className="img-fluid" alt="Debt.ca Project by Cristian Araya" />
                            <div className="overlay">
                                <h3>Debt.ca</h3>
                                <p>Lead Generation & Distribution</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item tag">WordPress</li>
                                    <li className="list-inline-item tag">API</li>
                                    <li className="list-inline-item tag">Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 project text-center">
                            <img src={mortgage_proj} className="img-fluid" alt="MortageRates.ca Project by Cristian Araya" />
                            <div className="overlay">
                                <h3>MortageRates.ca</h3>
                                <p>Lead Generation & Distribution</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item tag">WordPress</li>
                                    <li className="list-inline-item tag">ReactJS</li>
                                    <li className="list-inline-item tag">API</li>
                                    <li className="list-inline-item tag">Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 project text-center">
                            <img src={sircostarica_proj} className="img-fluid" alt="SIRCostaRica.com Project by Cristian Araya" />
                            <div className="overlay">
                                <h3>SIRCostaRica.com</h3>
                                <p>Real Estate</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item tag">WordPress</li>
                                    <li className="list-inline-item tag">HTML & CSS</li>
                                    <li className="list-inline-item tag">API</li>
                                    <li className="list-inline-item tag">Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 project text-center">
                            <img src={litebrowser_proj} className="img-fluid" alt="LiteBrowser.com Project by Cristian Araya" />
                            <div className="overlay">
                                <h3>LiteBrowser.com</h3>
                                <p>Lead Generation & Distribution</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item tag">Laravel</li>
                                    <li className="list-inline-item tag">AWS</li>
                                    <li className="list-inline-item tag">API</li>
                                    <li className="list-inline-item tag">Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 project text-center">
                            <img src={extensions_proj} className="img-fluid" alt="Extensions Manager Project by Cristian Araya" />
                            <div className="overlay">
                                <h3>Extensions Manager</h3>
                                <p>Custom Analytics Platform</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item tag">ReactJS</li>
                                    <li className="list-inline-item tag">Laravel</li>
                                    <li className="list-inline-item tag">AWS</li>
                                    <li className="list-inline-item tag">API</li>
                                    <li className="list-inline-item tag">Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 project text-center">
                            <img src={funnelbots_proj} className="img-fluid" alt="Debt.ca Project by Cristian Araya" />
                            <div className="overlay">
                                <h3>FunnelBots.io</h3>
                                <p>Custom ChatBot System</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item tag">Laravel</li>
                                    <li className="list-inline-item tag">AWS</li>
                                    <li className="list-inline-item tag">API</li>
                                    <li className="list-inline-item tag">Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 project text-center">
                            <img src={wearables_proj} className="img-fluid" alt="Debt.ca Project by Cristian Araya" />
                            <div className="overlay">
                                <h3>WearablesHelp.com</h3>
                                <p>Amazon Reviews Blog</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item tag">HTML & CSS</li>
                                    <li className="list-inline-item tag">WordPress</li>
                                    <li className="list-inline-item tag">AWS</li>
                                    <li className="list-inline-item tag">API</li>
                                    <li className="list-inline-item tag">Python</li>
                                    <li className="list-inline-item tag">Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="resume" class="clear-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h2>Interested In Working With Me?</h2>
                            <a href="https://devinparadise.s3.us-east-2.amazonaws.com/Cristian-Araya-Resume.pdf" target="_blank" className="btn btn-primary">Download My Resume</a>
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
                            <Carousel
                                showStatus={false}
                                showIndicators={false}
                                showThumbs={false}
                                infiniteLoop={true}>
                                <div className="testimonial text-center">
                                    <p className="text-5">Cristian has been absolutely vital to the success of our business for over a decade. He is genuine, has strong leadership skills and a can-do mindset with nothing being impossible. Cristian truly checks all the boxes and he is an asset to any organization.Cristian has been absolutely vital to the success of our business for over a decade. He is genuine, has strong leadership skills and a can-do mindset with nothing being impossible. Cristian truly checks all the boxes and he is an asset to any organization.</p>
                                    <div className="colleague">
                                        <img src={jarrod_img} className="img-fluid rounded-circle img-thumbnail shadow mb-2" />
                                        <p className="name">Jarrod Seitz</p>
                                        <p className="description">Entrepreneur | Investor</p>
                                    </div>
                                </div>
                                <div className="testimonial text-center">
                                    <p className="text-5">Cristian is a hard working and reliable individual who knows exactly what he wants and isn´t afraid to go get it. Always looking to achieve and learn more A reliable, kind and sweet family man. He´s definitely someone you want to have in your team.  I would honestly recommend Cristian for any position or business endeavor provided all the experience I've had with him.</p>
                                    <div className="colleague">
                                        <img src={grace_img} className="img-fluid rounded-circle img-thumbnail shadow mb-2" />
                                        <p className="name">Graciela Gonzalez</p>
                                        <p className="description">Fundadora at Paz Sin Poses</p>
                                    </div>
                                </div>
                                <div className="testimonial text-center">
                                    <p className="text-5">Cristian is a full stack developer, with strong skills on front end, server optimizations, and different PHP platforms like Laravel and Drupal. He is always available to give help in any case. I hope to work again with him in the future.</p>
                                    <div className="colleague">
                                        <img src={diego_img} className="img-fluid rounded-circle img-thumbnail shadow mb-2" />
                                        <p className="name">Diego Seghezzo</p>
                                        <p className="description">Fullstack engineer at X-Team</p>
                                    </div>
                                </div>
                                <div className="testimonial text-center">
                                    <p className="text-5">Cristian is an excellent html/css coder and Joomla/Drupal Implementer among others. He provides top notch coding and makes sure he delivers exactly what the client asks for.</p>
                                    <div className="colleague">
                                        <img src={abner_img} className="img-fluid rounded-circle img-thumbnail shadow mb-2" />
                                        <p className="name">Abner Cruz</p>
                                        <p className="description">Gerente de Entrenamiento & Desarrollo</p>
                                    </div>
                                </div>
                                <div className="testimonial text-center">
                                    <p className="text-5">Cristian is a great asset in any Company, as he is responsible, detail-oriented, able to deliver his work in a fast pace and with excellent quality and results.</p>
                                    <div className="colleague">
                                        <img src={laura_img} className="img-fluid rounded-circle img-thumbnail shadow mb-2" />
                                        <p className="name">Laura VegaLaura Vega</p>
                                        <p className="description">Communications & Marketing strategy</p>
                                    </div>
                                </div>
                                <div className="testimonial text-center">
                                    <p className="text-5">In the time I worked with Cristian Araya I could notice his dedication for his work.</p>
                                    <div className="colleague">
                                        <img src={ale_img} className="img-fluid rounded-circle img-thumbnail shadow mb-2" />
                                        <p className="name">Alejandra Ramos</p>
                                        <p className="description">Administrator at Tron Technologies, S.A.</p>
                                    </div>
                                </div>
                            </Carousel>
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
                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <label htmlFor="">What is Your Name:</label>
                            <input id="name" name="name" type="text" className="form-control" />
                            <label htmlFor="">Your Email Address::</label>
                            <input id="email" name="email" type="text" className="form-control" />
                            <label htmlFor="">How can I Help?:</label>
                            <textarea id="message" name="message" className="form-control"></textarea>
                            <button type='submit' className="btn btn-primary">Send</button>
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