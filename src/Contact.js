import React from 'react';
import Navbar from './Navbar';
import contact from './assets/contact.svg';
import { Helmet } from 'react-helmet';

export default class Contact extends React.Component{
    contactUs(e){
        document.form.action="https://getsimpleform.com/messages?form_api_token=4734d67fb59d84dd462504762349a190";
        alert(`Thanks for your submission ${e.target.name.value}! We'll notify you when your post is live!`);
    }
    render(){
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
                        <form
                         name="form"
                         style={{marginBottom:`10px`}}
                         onSubmit={e => this.contactUs(e)}
                         className="contact-form"
                         
                         method="post"
                         encType="multipart/form-data">
                            <input type='hidden' name='_spam' value='message' />
                            <div className="form-group">
                                <label htmlFor="name">FullName</label>
                                <input
                                 className="form-control loginbar"
                                 type='text'
                                 name='name'
                                 required
                                 placeholder='Mike Wazowski'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="details">Academic Details</label>
                                <input
                                 className="form-control loginbar"
                                 type='text'
                                 name='details'
                                 required
                                 placeholder='Semester, department and section'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                 className="form-control loginbar"
                                 type='email'
                                 name='email'
                                 required
                                 placeholder='mikewazowski@gmail.com'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="social">Social Media</label>
                                <input
                                 className="form-control loginbar"
                                 type='url'
                                 name='social'
                                 required
                                 placeholder='https://website.com/username'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="attachment">Upload your article here</label>
                                <input
                                 className="form-control loginbar"
                                 type='file'
                                 name='attachment'
                                 required
                                 placeholder='Upload file'/>
                            </div>
                            <button
                             style={{border:`none`}} 
                             className="start">
                                <i className="fas fa-paper-plane"> Send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
    