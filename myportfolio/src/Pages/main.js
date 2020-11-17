import React, { Component } from 'react';
import "./pages.css";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <main className="container">
                    <section className="row">
                        <div className="col-xs-5 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <h1>Portfolio</h1>
                        </div>
                        <div className="col-xs-7 col-sm-6 col-md-8 col-lg-8 col-xl-8"></div>
                    </section>
                    <hr />
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <figure>
                                <a href="https://cryptic-encounter.herokuapp.com/">
                                    <img
                                        src="assets\Images\cryptic_encounters_screenshot.png"
                                        className="portfolio-thumbnail"
                                        alt="Portfolio Image"
                                    />
                                </a>
                                <figcaption className="captionText">
                                    Blanket!
                            <a href="https://github.com/"
                                    >|| Repository Link</a
                                    >
                                </figcaption>
                            </figure>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="https://.github.io/Random_Password_Generator_App/">
                                <figure className="captionText">
                                    <img
                                        src="assets\Images\03-javascript-homework-demo.png"
                                        className="portfolio-thumbnail"
                                        alt="Portfolio Image"
                                    />
                                    <figcaption className="captionText">
                                        Random Password Generator App
                            </figcaption>
                                </figure>
                            </a>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <a
                                href="https://github.com/LNoeltner1/Employee_Summary_Template_Engine"
                            >
                                <figure>
                                    <img
                                        src="assets\Images\teamgeneratorthumbnail.png"
                                        className="portfolio-thumbnail"
                                        alt="Portfolio Image"
                                    />
                                    <figcaption className="captionText">
                                        HTML Employee Summary Page Generator App
                            </figcaption>
                                </figure>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="https:///MySQL_Employee_Tracker">
                                <figure>
                                    <img
                                        src="assets\Images\employeetrackerthumbnail.png"
                                        className="portfolio-thumbnail"
                                        alt=" Portfolio Image"
                                    />
                                    <figcaption className="captionText">
                                        CLI App for tracking, adding, and viewing a company's
                                        Departments, Roles, and Employees
                            </figcaption>
                                </figure>
                            </a>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="https://github./README_Generator">
                                <figure>
                                    <img
                                        src="assets\Images\Screenshot.png"
                                        className="portfolio-thumbnail"
                                        alt=" Portfolio Image"
                                    />
                                    <figcaption className="captionText">
                                        A Professional ReadMe Generator CLI
                            </figcaption>
                                </figure>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="https://github"
                            ><figure>
                                    <img
                                        src="assets\Images\weatherDashboard.png"
                                        className="portfolio-thumbnail"
                                        alt=" Weather Dashboard"
                                    />
                                    <figcaption className="captionText">
                                        Current Weather and 5-Day Forecast App using API calls
                            </figcaption>
                                </figure>
                            </a>
                        </div>
                    </section>
                    <br />
                </main>
            </div>
        );
    }
}

export default Portfolio;
