import React from 'react';

const Skill = ( { icon, title, children } ) => (
    <div className="col-sm-6 col-lg-4 skill text-center">
        <img src={icon} alt={title} className="mb-4" />
        <h3>{title}</h3>
        {children}
    </div>
)

export default Skill;