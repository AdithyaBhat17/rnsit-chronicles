import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { db } from './Firebase'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import SharingButtons from './ShareButtons'
import { OrbitSpinner } from 'react-epic-spinners'
import { blogReducer } from './Blogs'

const BlogPost = (props) => {
    const [state, dispatch] = React.useReducer(blogReducer, {
        articles: undefined,
        loading: true
    })

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [props.match.params.path])

    React.useEffect(() => {
        dispatch({type: 'LOADING'})
        props.location.prevPath !== '/blog' ? db.collection('articles')
        .get()
        .then(collection => {
          const articles = collection.docs.map(doc => doc.data());
          console.log('made a network call')
          articles.sort((a,b) => b.date.localeCompare(a.date));
          dispatch({type: 'LOADED', articles})
//           console.log(this.state)
        }) : dispatch({type: 'LOADED', articles: props.location.articles})
    }, [])

    const { loading, articles } = state

    if(loading) return <OrbitSpinner  className="loading" color="#22d5c3" />

    return (
        <div>
            {articles.map(article => article.path === props.match.params.path && (
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
                        <div className="thumbnail blog-post">
                            {articles.map(article => article.path === props.match.params.path && (
                                <div key={article.title}>   
                                    <img src={article.image} alt={article.title} className="article-img"/>                                 
                                    <h1 style={{fontWeight:`bold`}}>{article.title}</h1>
                                    <SharingButtons
                                     social={article.social} 
                                     author={article.author}
                                     title={article.title}
                                     path={article.path}
                                     />
                                    {article.contents.map((content,index) => (
                                        <p
                                         style={content.length < 100 ? {fontWeight:`bold`,fontFamily:`Wavehaus`} : {fontWeight:`normal`}} 
                                         key={index}
                                         dangerouslySetInnerHTML={{__html: content}}></p>
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

export default BlogPost;
