import React, { Component } from 'react';
import articles from './_DATA';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Blogs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
              {articles.map(article => (
                <div className="col-md-4 col-xs-12">
                  <div key={article.path} className="thumbnail">
                      <img src={article.image} alt={article.title} className="card-img"/>
                      <h4>{article.title}</h4>
                      <p>
                        <a className="social" href={article.social}>{article.author}</a>&nbsp;<small>Oct 24,2018</small>
                      </p>
                      <Link className="read-more" to={`/blog/${article.path}`}>read here</Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
