import React from "react";

const Reference = ( { text, name, img, description } ) => (
    <div className="testimonial text-center">
        <p className="text-5">{text}</p>
        <div className="colleague">
            <img alt={`${name} Recommends Cristian Araya`} src={img} className="img-fluid rounded-circle img-thumbnail shadow mb-2" />
            <p className="name">{name}</p>
            <p className="description">{description}</p>
        </div>
    </div>
)

export default Reference;