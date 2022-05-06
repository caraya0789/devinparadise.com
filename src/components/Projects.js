import React from 'react';

import Project from './Project';

import debt_proj from '../images/debt.jpg';
import mortgage_proj from '../images/mortgage.jpg';
import funnelbots_proj from '../images/funnelbots.jpg';
import sircostarica_proj from '../images/sircostarica.jpg';
import wearables_proj from '../images/wearables.jpg';
import extensions_proj from '../images/extensions.jpg';
import litebrowser_proj from '../images/litebrowser.jpg';

const projects = [{
    icon: debt_proj,
    title: 'Debt.ca',
    description: 'Lead Generation & Distribution',
    tags: ['WordPress', 'API', 'Git']
}, {
    icon: mortgage_proj,
    title: 'MortageRates.ca',
    description: 'Lead Generation & Distribution',
    tags: ['WordPress', 'ReactJS', 'API', 'Git']
}, {
    icon: sircostarica_proj,
    title: 'SIRCostaRica.com',
    description: 'Real Estate',
    tags: ['WordPress', 'HTML/CSS', 'API', 'Git']
}, {
    icon: litebrowser_proj,
    title: 'LiteBrowser.org',
    description: 'Chromium Based Browser',
    tags: ['Laravel', 'AWS', 'API', 'Git']
}, {
    icon: extensions_proj,
    title: 'Extensions Manager',
    description: 'Custom Analytics Platform',
    tags: ['ReactJS', 'Laravel', 'AWS', 'API', 'Git']
}, {
    icon: funnelbots_proj,
    title: 'FunnelBots.io',
    description: 'Custom ChatBot System',
    tags: ['Laravel', 'AWS', 'API', 'Git']
}, {
    icon: wearables_proj,
    title: 'WearablesHelp.com',
    description: 'Amazon Reviews Blog',
    tags: ['HTML & CSS', 'WordPress', 'AWS', 'API', 'Python', 'Git']
},]

function Projects( { projectClassName } ) {
    return (
        <>
            {projects.map( ( data, index ) => (
                <Project {...data} key={`project-${index}`} _key={`project-${index}`} className={projectClassName} />
            ) )}
        </>
    )
}

export default Projects;