import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Blogs from './Blogs';
import BlogPost from './BlogPost';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route exact path="/blog" component={Blogs} />
            <Route path="/blog/:path" component={BlogPost} />
            {/* <Route path="/search" component={Search} /> */}
        </React.Fragment>
    </Router>, document.getElementById('root')
);

serviceWorker.register();
