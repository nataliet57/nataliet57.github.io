import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import profile from './images/profile.jpg';
import Typical from 'react-typical'
import './App.css';

import {
  Landing,
  Navbar,
  CardContainer,
  WhoIAm,
  Button
} from './styles'

const App = () => {
  return(
    <div>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Natalie Tam</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="css/style.css" />
        <Landing>
        <div className="nav">
          {/* Navbar */}
          <img src={logo} alt="Natalie Tam Logo" />
          <Navbar>
              <a href="#contact" className="w3-bar-item w3-button"> contact </a>
              <a href="#projects" className="w3-bar-item w3-button">projects </a>
              <a href="#work" className="w3-bar-item w3-button"> work </a>
              <a href="#about" className="w3-bar-item w3-button">about</a>
          </Navbar>
        </div>
        {/* about */}
        <div className="#about">
          <header id="about" className="alt">
            <div className="title">
              <h1>
                <b>Hey, I'm Natalie </b>
                <span>👋</span>
              </h1>
              <p>
                  I'm a {' '}
                </p>
                <Typical
                  loop={Infinity}
                  wrapper='p'
                  steps={[
                    'designer 💅🏻',
                    1000,
                    'guitarist 🎸',
                    1000,
                  ]}
                  />
            </div>
            <div className="header2">
              <h2> Management Engineering Student at <br /> The University of Waterloo </h2>
              <p> I'm currently a second year student in Management Engineering <br />
                passionate about planning, developing, and delivering software solutions.
                I enjoy learning new things, music, playing sports, and meeting new people.
                I'd love to get in touch with you!</p>
              <a href="natalie-tam-resume.pdf" button type="button" className="btn btn-primary">View my Resume</a>
            </div>
            <div className="profile-pic"> <img src={profile} alt="Profile Picture" /> </div>
          </header>
        </div>
        </Landing>
        {/* Banner */}
        <div className="#work">
          <header id="work" className="alt">
            <div className="title"><h1> work experience </h1> </div>
            <div className="subtitle"><p> Seeking Fall 2021 Internships </p><p> </p></div>
            <div className="box center">
              <div className="jobTitle">
                <p> <b> Freckle,</b> <i> Full Stack Engineer </i> </p>
              </div>
              <ul>
                <li> hello </li>
              </ul>
            </div>
            <div className="padding"> </div>
            <div className="box center">
              <div className="jobTitle">
                <p> <b> UW Print &amp; Retail Services,</b> <i> Informations Systems Analyst </i> </p>
                <ul>
                  <div className="description">
                    <li>  Managed and analyzed development servers to reduce time from loading staging sites by 187% (from 16s to 3s) </li>
                    <li> Created scripts to automate source code in upgrade process
                    </li><li> Installed network monitoring tools to analyze resource trends and performance problems </li>
                    <li> Developed system infrastructure using <b> MySQL, Docker, phpmyAdmin, Apache</b></li>
                  </div>
                </ul></div>
            </div>
          </header></div>
        <div className="#projects">
          <header id="projects" className="alt">
            <div className="title"><h1> projects </h1> </div>
            <div className="subtitle"><p> some are still a work in progress, but check them out! </p> </div>
            <div className="project">
              <div className="projectTitle  col-md-4"> <a href="https://github.com/nataliet57/google-clone"> Google Search Engine Lookalike</a></div>
              <div className="description col-md-4"> dklfaj kdafjl </div>
              <div className="slideshow-container">
              </div>
            </div>
          </header>
        </div>
      </div>
  );



};

export default App;
