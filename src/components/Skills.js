import React from "react";

import Skill from './Skill';

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

function Skills() {
    return (
        <>
            <Skill icon={php_icon} title="PHP/MySQL">
                <p>I've been doing PHP from the beginning of my career, from simple forms to fully fledged web applications, that are secure and scalable.</p>
            </Skill>
            <Skill icon={html_icon} title="HTML/CSS">
                <p>I'm able to translate beautiful designs into functional html and css, with attention to detail and optimization in mind, for all devices and screen sizes</p>
            </Skill>
            <Skill icon={react_icon} title="React JS">
                <p>I'm highly skilled at reactjs, redux, and hooks, implementing functional and fully testable single page applications or components, that integrate with backend services</p>
            </Skill>
            <Skill icon={wp_icon} title="WordPress">
                <p>I'm able to plan, implement and deploy custom WordPress Themes and Plugins, and optimized existing websites that take advantage of this powerful CMS platform</p>
            </Skill>
            <Skill icon={laravel_icon} title="Laravel">
                <p>I can design, develop, test and deploy fully fledged web applications and API’s with Laravel, taking advantage of all the packages and libraries this incredible framework provides.</p>
            </Skill>
            <Skill icon={aws_icon} title="AWS">
                <p>I able to deploy custom web application to the cloud, either to a custom EC2 instance or a completely serverless solution using Lambda and S3</p>
            </Skill>
            <Skill icon={api_icon} title="API">
                <p>Either creating a custom API to connect 2 different systems or implementing custom 3rd party API’s I understand the power of REST, JSON and even old school SOAP implementations.</p>
            </Skill>
            <Skill icon={python_icon} title="Python">
                <p>I can create custom Python Scripts to gather, process, modify and deliver data from any website, using either basic requests and beautifulsoup, or complex selenium implementations</p>
            </Skill>
            <Skill icon={git_icon} title="Git">
                <p>Git is Core to my development process, from keeping a record of changes I’ve made, to working with team members, merging branches and deploying products to the cloud.</p>
            </Skill>
            <Skill icon={tools_icon} title="Other Skills">
                <ul className="list-inline">
                    <li className="list-inline-item tag">Load Optimization</li>
                    <li className="list-inline-item tag">Cloudflare</li>
                    <li className="list-inline-item tag">Google API’s</li>
                    <li className="list-inline-item tag">Linux</li>
                    <li className="list-inline-item tag">Google Analytics</li>
                    <li className="list-inline-item tag">NodeJS</li>
                </ul>
            </Skill>
            <Skill icon={ideas_icon} title="* Web Architect">
                <p>The most important skill of all, marring all the of the above into creative solutions to complex business problems. </p>
            </Skill>
        </>
    )
}

export default Skills;