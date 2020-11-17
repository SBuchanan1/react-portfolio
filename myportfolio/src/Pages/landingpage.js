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
                                Hi! I'm Sydney Buchanan a current student at the Georgia Tech full stack flex web development boot-camp.
                                I've always had a passion for engineering. When I began University in 2013 at Tuskegee University,
                                it was with a focus in Business Administration. However, despite my love for business,
                                I've always been fascinated with the way things work. I have a knack for problem solving
                                which brought me to the decision of changing my major. Unfortunately, due to confidential reasons
                                I was unable to complete my degree, which brought me to focus on career choices that don't necessarily require a degree.
                                That was when I learned of coding boot-camps and the awesome part of it all,
                                I would still have the opportunity to become an engineer.
                    </p>
                            <p>
                                Engineering is incredibly challenging yet very rewarding. What I've come to learn about
                                software engineering is, I can be creative as I would like. Also, being able to learn everyday
                                is something that excites me. There's always an opportunity to learn a new technique or a new application
                                in whatever area your heart desires.
                            </p>
                            <p>
                                Since the start of August, I've learned more than I could have ever imagined.
                                I honestly never would have thought that I would learn what I've come to learn in
                                these past three months. I'm truly thankful for the opportunity presented to me
                            </p>
                            <p>
                                I am more than excited to see what the result of the boot-camp brings!
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
