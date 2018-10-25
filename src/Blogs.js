import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { db } from './Firebase';
import Footer from './Footer';

class Blogs extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    db.collection('articles')
    .get()
    .then(collection => {
      const articles = collection.docs.map(doc => doc.data());
      // localeCompare function helps sort strings TODO - read more on localeCompare 
      console.log(articles.sort((a,b) => b.date.localeCompare(a.date)).map(article => article.date));
      this.setState({articles})
      console.log(this.state)
    })
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
              {articles.map((article, index) => (
                <div key={index} className="col-md-4 col-xs-12">
                  <div className="thumbnail cards">
                      <img src={article.image} alt={article.title} className="card-img"/>
                      <h4>{article.title}</h4>
                      <p>
                        <a className="social" href={article.social}>{article.author}</a>&nbsp;<small>{article.date}</small>
                      </p>
                      <Link className="read-more" to={`/blog/${article.path}`}>read here</Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blogs;
