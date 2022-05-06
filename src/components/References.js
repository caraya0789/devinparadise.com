import React from "react";
import { Carousel } from 'react-responsive-carousel';

import Reference from "./Reference";

// references
import jarrod_img from '../images/jarrod.jpg';
import grace_img from '../images/grace.jpg';
import abner_img from '../images/abner.jpg';
import laura_img from '../images/laura.jpg';
import ale_img from '../images/ale.jpg';
import diego_img from '../images/diego.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const references = [{
    text: 'Cristian has been absolutely vital to the success of our business for over a decade. He is genuine, has strong leadership skills and a can-do mindset with nothing being impossible. Cristian truly checks all the boxes and he is an asset to any organization.Cristian has been absolutely vital to the success of our business for over a decade. He is genuine, has strong leadership skills and a can-do mindset with nothing being impossible. Cristian truly checks all the boxes and he is an asset to any organization',
    name: 'Jarrod Seitz',
    img: jarrod_img,
    description: 'Entrepreneur | Investor'
}, {
    text: 'Cristian is a hard working and reliable individual who knows exactly what he wants and isn\'t afraid to go get it. Always looking to achieve and learn more A reliable, kind and sweet family man. He\'s definitely someone you want to have in your team.  I would honestly recommend Cristian for any position or business endeavor provided all the experience I\'ve had with him.',
    name: 'Graciela Gonzalez',
    img: grace_img,
    description: 'Fundadora at Paz Sin Poses'
}, {
    text: 'Cristian is a full stack developer, with strong skills on front end, server optimizations, and different PHP platforms like Laravel and Drupal. He is always available to give help in any case. I hope to work again with him in the future.',
    name: 'Diego Seghezzo',
    img: diego_img,
    description: 'Fullstack engineer at X-Team'
}, {
    text: 'Cristian is an excellent html/css coder and Joomla/Drupal Implementer among others. He provides top notch coding and makes sure he delivers exactly what the client asks for.',
    name: 'Abner Cruz',
    img: abner_img,
    description: 'Gerente de Entrenamiento & Desarrollo'
}, {
    text: 'Cristian is a great asset in any Company, as he is responsible, detail-oriented, able to deliver his work in a fast pace and with excellent quality and results.',
    name: 'Laura Vega',
    img: laura_img,
    description: 'Communications & Marketing strategy'
}, {
    text: 'In the time I worked with Cristian Araya I could notice his dedication for his work.',
    name: 'Alejandra Ramos',
    img: ale_img,
    description: 'Administrator at Tron Technologies, S.A'
}]

function References() {
    return (
        <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}>

            {references.map( ( data, index ) => (
                <Reference key={`reference-${index}`} {...data} />
            ) )}

        </Carousel>
    )
}

export default References;
