import React from 'react';
import Navbar from './Navbar';
import contact from './assets/contact.svg';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function App(){
    return (
      <div className="App">
        <Navbar />
        <Helmet>
            <title>Contact | RNSIT Chronicles</title>
        </Helmet>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-push-6">
                    <img src={contact} alt="Contact us" className="hero-img contact-img"/>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <h1 className="contact-h1">Send us your articles</h1>
                    <p className="about">
                        Welcome to the official happening page of RNSIT! Here, you can read about anything and 
                        everything that goes on in the campus, technical or not. Topics covered will include events, 
                        fests, projects and many other topics of interest. Happy reading!
                        <br/><br/>
                    <Link to="/blog" className="start"><i className="fas fa-paper-plane"></i> Start Writing</Link>
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
}
