import React from 'react';
import hero from './assets/hero.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-push-6">
                    <img src={hero} alt="Blog" className="hero-img"/>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <h1 className="blog-name">RNSIT Chronicles</h1>
                    <p className="about">
                        Welcome to the official happening page of RNSIT! Here, you can read about anything and 
                        everything that goes on in the campus, technical or not. Topics covered will include events, 
                        fests, projects and many other topics of interest. Happy reading!
                        <br/><br/>
                    <Link to="/blog" className="start">Start Reading</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;