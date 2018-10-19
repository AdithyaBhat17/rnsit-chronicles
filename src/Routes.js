import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Blogs from './Blogs';
import BlogPost from './BlogPost';
import PrivateRoute from './PrivateRoute';
import AddBlog from './AddBlog';
import config from './Firebase';
import Login from './Login';
import Search from './Search';
import { AtomSpinner } from 'react-epic-spinners';

export default class Routes extends React.Component{
    state = { loading: true, authenticated: false, user: null };

    componentWillMount() {
        config.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({
              authenticated: true,
              currentUser: user,
              loading: false
            });
          } else {
            this.setState({
              authenticated: false,
              currentUser: null,
              loading: false
            });
          }
        });
    }

    render(){
        const { authenticated, loading } = this.state;
        if (loading) {
            return <AtomSpinner className="loading" color="#22d5c3" />;
        }
        return(
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={App} />
                    <Route exact path="/blog" component={Blogs} />
                    <Route path="/blog/:path" component={BlogPost} />
                    <PrivateRoute exact path="/yote" component={AddBlog} authenticated={authenticated}/>
                    <Route exact path="/yeet" component={Login} />
                    <Route path="/search" component={Search} />
                </React.Fragment>
            </Router>
        )        
    }
}
