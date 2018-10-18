import React, { Component } from 'react';
import articles from './_DATA';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class BlogPost extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="thumbnail">
                            {articles.filter(article => article.path === this.props.match.params.path).map(post => (
                                <div>   
                                    <img src={post.image} alt={post.title} className="article-img"/>                                 
                                    <h1 style={{fontWeight:`bold`}}>{post.title}</h1>
                                    {/* <p>{post.content[0]}</p> */}
                                    <p>by <a style={{color:`#22d5c3`}} href={post.social}>{post.author}</a></p>
                                    {post.contents.map((content,index) => (
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
                                <li className="latest" key={article.path}>
                                    <Link to={`/blog/${article.path}`}>{article.title}</Link>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}

export default BlogPost;
