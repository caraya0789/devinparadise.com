import React from 'react';

function Project( { icon, title, description, tags, _key, className } ) {
    return (
        <div className={`${className} project`}>
            <img src={icon} className="img-fluid" alt={`${title} Project by Cristian Araya`} />
            <div className="overlay">
                <h3>asd</h3>
                <p>{description}</p>
                <ul className="list-inline">
                    {tags.map( ( tag, index ) => (
                        <li key={`${_key}-tag-${index}`} className="list-inline-item tag">{tag}</li>
                    ) )}
                </ul>
            </div>
        </div>
    )
}

export default Project;