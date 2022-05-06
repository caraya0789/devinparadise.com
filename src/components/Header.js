import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";

function Header() {
    const [headerFixed, setHeaderFixed] = useState( false );

    const handleScroll = function( event ) {
        if( window.pageYOffset > 10 ) {
            setHeaderFixed( true );
        }
        if( window.pageYOffset <= 10 ) {
            setHeaderFixed( false );
        }
    };

    useEffect( () => {
        window.addEventListener( 'scroll', handleScroll, { passive: true } );
    }, [] );

    return (
        <>
            <Helmet htmlAttributes={{ lang: 'en' }} title="Cristian Araya | Web In Paradise" />
            <header className={headerFixed ? 'fixed' : ''} id="header">
                <div className="container d-flex justify-content-between">
                    <a href="/" className="logo">Dev In Paradise</a>
                    <a href="#contact" className="phone btn btn-primary">Get In Touch</a>
                </div>
            </header>
        </>
    )
}

export default Header;