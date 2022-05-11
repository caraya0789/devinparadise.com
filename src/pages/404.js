import React from "react";

import Header from "../components/Header";

import '../styles/main.scss';

function Page404() {
    return (
        <>
            <Header />
            <section id="hero" className="clear-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-uppercase">Oh No!</h2>
                            <h1 className="text-uppercase">That Page <br />Doesn't Exist</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page404;