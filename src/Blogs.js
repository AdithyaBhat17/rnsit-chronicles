import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { db } from './Firebase';
import Footer from './Footer';
import { OrbitSpinner } from 'react-epic-spinners';

class Blogs extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true
    }
  }

  componentDidMount(){
    db.collection('articles')
    .get()
    .then(collection => {
      const articles = collection.docs.map(doc => doc.data());
      // localeCompare function helps sort strings TODO - read more on localeCompare 
      articles.sort((a,b) => b.date.localeCompare(a.date)).map(article => article.date);
      this.setState({articles,loading:false})
//       console.log(this.state)
    })
  }
  
  componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollIntoView()
  }

  render() {
    const { articles, loading } = this.state;
    if(loading) return <OrbitSpinner  className="loading" color="#22d5c3" />
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
                        <a className="social"
                         target="_blank" rel="noopener noreferrer"
                         href={article.social}>
                         {article.author}
                        </a>
                        &nbsp;<small>{article.date}</small>
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
