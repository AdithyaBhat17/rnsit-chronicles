import React, { Component } from 'react';
import Navbar from './Navbar';
import config from './Firebase';
import login from './assets/login.svg';

class Login extends Component {
    logIn = event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          config
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          this.props.history.push('/yote');
        } catch (error) {
          alert(error);
        }
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <form onSubmit={this.logIn} className="form loginform">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" required className="form-control loginbar" placeholder="shrek@gmail.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" required name="password" className="form-control loginbar" placeholder="*******"/>
                                </div>
                                <input type="submit" value="LOGIN"/>
                            </form>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={login} alt="login" className="hero-img"/>
                        </div>
                    </div>
                    
                </div>                
            </div>
        );
    }
}

export default Login;