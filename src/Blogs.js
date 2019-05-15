import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { db } from './Firebase';
import Footer from './Footer';
import { OrbitSpinner } from 'react-epic-spinners';

export const blogReducer = (state, action) => {
  switch(action.type) {
      case 'LOADING':
          return {
              ...state,
              loading: true
          }
      case 'LOADED': {
          return {
              ...state,
              loading: false,
              articles: action.articles
          }
      }
      default: {
          throw new Error('Unhandled action type ' + action.type)
      }
  }
}

const Blogs = (props) => {
  const [state, dispatch] = React.useReducer(blogReducer, {
    articles: undefined,
    loading: true
  })

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    dispatch({type: 'LOADING'})
    db.collection('articles')
    .get()
    .then(async collection => {
      const articles = await collection.docs.map(doc => doc.data());
      articles.sort((a,b) => b.date.localeCompare(a.date));
      dispatch({type: 'LOADED', articles})
//           console.log(this.state)
    })
  }, [])

  const { loading, articles } = state


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
                      <Link className="read-more" to={{
                        pathname: `/blog/${article.path}`,
                        articles: articles,
                        prevPath: props.history.location.pathname
                      }}>read here</Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default Blogs;
