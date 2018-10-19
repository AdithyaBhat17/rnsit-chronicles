import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { db } from './Firebase';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

class BlogPost extends Component {
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
          const articles = collection.docs.map(doc => doc.data())
          this.setState({articles})
          console.log(this.state)
        })
    }

    render() {
        const { articles } = this.state;
        return (
        <div>
            {articles.map(article => article.path === this.props.match.params.path && (
                <Helmet key={article.path}>                
                    <title>{article.title}</title>
                    <meta name="description" content={article.contents[0]} />
                    <meta property="og:title" content={article.title} />
                    <meta property="og:description" content={article.contents[0]} />
                    <meta property="og:image" content={article.image} />
                </Helmet>
            ))}
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="thumbnail">
                            {articles.map(article => article.path === this.props.match.params.path && (
                                <div key={article.title}>   
                                    <img src={article.image} alt={article.title} className="article-img"/>                                 
                                    <h1 style={{fontWeight:`bold`}}>{article.title}</h1>
                                    <div>
                                        by <a style={{color:`#22d5c3`}} href={article.social}>{article.author}</a>
                                       &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a className="resp-sharing-button__link" href={`https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Frnsit.now.sh%2Fblog%2F${article.path}`} target="_blank" rel="noopener noreferrer" aria-label="">
                                            <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                                                </div>
                                            </div>
                                        </a>                                    
                                        <a className="resp-sharing-button__link" href={`https://twitter.com/intent/tweet/?text=${article.title.replace(" ","%20")}.&amp;url=https%3A%2F%2Frnsit.now.sh%2Fblog%2F${article.path}`} target="_blank" rel="noopener noreferrer" aria-label="">
                                            <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                                                </div>
                                            </div>
                                        </a>                                         
                                        <a className="resp-sharing-button__link" href={`whatsapp://send?text=${article.title.replace(" ","%20")}.%20https%3A%2F%2Frnsit.now.sh%2Fblog%2F${article.path}`} target="_blank" rel="noopener noreferrer" aria-label="">
                                            <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" className ="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>
                                                </div>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    {article.contents.map((content,index) => (
                                        <p key={index}>{content}</p>
                                    ))}
                                </div>
                            ))}
                        </div> 
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h3>Recent Posts</h3>
                        <div className="thumbnail">
                            {articles.map(article => (
                                <li className="latest" key={article.title}>
                                    <Link to={`/blog/${article.path}`}>{article.title}</Link>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default BlogPost;
