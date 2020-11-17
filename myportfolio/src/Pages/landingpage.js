import React, { Component } from 'react';
import "./pages.css";

class Home extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <main className="container">
                    <section className="row">
                        <div className="col-xs-5 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <h1>About Me</h1>
                        </div>
                        <div className="col-xs-7 col-sm-6 col-md-8 col-lg-8 col-xl-8"></div>
                    </section>
                    <hr />
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <img
                                src="assets\Images\IMG_0575_83501212705938.JPG"
                                className="mr-3"
                                id="bioimage"
                                alt="Sydney Buchanan Picture"
                            />
                            <br /><br />
                            <p>
                                I am currently a full stack web development student at the illustrious Georgia Tech.
                                I aspire to expand my knowledge in software engineering and eventually
                    </p>
                            <p>
                                {/* I began at university in 2011 at the University of Georgia with a
                                focus in Pre-Veterinary Medicine, which switched to Anthropology
                                after a year and switched again to Psychology with a minor in
                                Spanish and Painting after another year. I attended U.G.A. until the
                                end of my Junior year, when I decided to leave Athens to return to
                                Atlanta. */}
                            </p>
                            <p>
                                {/* Since then, I have continued to enjoy learning independently, and,
                                in my spare time, I am almost always researching whatever fascinates
                                me in that moment. I love learning about history, language, animals,
                                the arts, space, computers and technology. I am currently teaching
                                myself German after becoming mostly fluent in Spanish in college.
                                When I am not researching interesting information, you could find me
                                watching movies, playing games, playing with my dogs, or
                                painting/making something. */}
                            </p>
                            <p>
                                {/* I am more than halfway through the Georgia Tech Coding Boot Camp,
                                and I am greatly enjoying the opportunity to strengthen my skills as
                                a developer. See my portfolio for some of my completed projects! */}
                            </p>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
                    </section>
                    <br />
                </main>
            </div>
        );
    }
}

export default Home;
