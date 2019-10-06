import React, { useState } from 'react';
import Navbar from './Navbar';
import config from './Firebase';
import login from './assets/login.svg';

const Login = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logIn = async (event) => {
        event.preventDefault();
        try {
          await config
            .auth()
            .signInWithEmailAndPassword(email, password);
          props.history.push('/yote');
        } catch (error) {
          alert(error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <form onSubmit={logIn} className="form loginform">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                 type="email" 
                                 name="email" 
                                 required 
                                 onChange={(e) => setEmail(e.target.value)}
                                 className="form-control 
                                 loginbar" placeholder="shrek@gmail.com"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                 type="password" 
                                 required 
                                 name="password"                                  
                                 onChange={(e) => setPassword(e.target.value)}
                                 className="form-control loginbar" 
                                 placeholder="*******"/>
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
    )
}

export default Login;