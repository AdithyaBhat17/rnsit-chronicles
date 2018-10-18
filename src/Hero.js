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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam commodi veritatis exercitationem quidem sit, dignissimos mollitia adipisci, ex sequi dolor. Unde placeat iusto eius recusandae? Consectetur animi odio beatae, numquam soluta corrupti porro reiciendis ex aliquid, nam labore doloribus!
                        <br/><br/>
                    <Link to="/blog" className="start">Start Reading</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;