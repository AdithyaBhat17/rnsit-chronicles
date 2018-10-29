import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { db } from './Firebase';
import searchimg from './assets/search.svg';
import { Helmet } from 'react-helmet';

class Search extends Component {
  state = {
      keyword: "",
      articles: []
  }

  search = (e) => {
    e.preventDefault();
    this.setState({
        keyword: e.target.value
    })
  }

  componentDidMount(){
    db.collection('articles')
    .get()
    .then(collection => {
      const articles = collection.docs.map(doc => doc.data())
      this.setState({articles})
      console.log(this.state)
    })
  }

  render() {
    const { articles, keyword } = this.state;
    return (
      <div>
          <Helmet>
              <title>Search | RNS Chronicles</title>
          </Helmet>
         <Navbar />
         <div className="container">
            <input
             type="text"
             className="form-control searchbar" 
             placeholder="Search for articles here.."
             onChange={(e) => this.search(e)}/>
         </div>
         <div className="container">
            <div className="row">
                {articles.map(article => (keyword.length > 1 && article.title.toLowerCase().includes(keyword.toLowerCase())) && (
                    <div key={article.path} className="col-md-4 col-sm-12">
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
                
                {keyword.length < 1 && (<img src={searchimg} alt="Search" className="search-img"/>)}
            </div>
         </div>
      </div>
    );
  }
}

export default Search;
