import React, { lazy, Suspense, useEffect, useReducer } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import App from './App'
import config from './Firebase'
import PrivateRoute from './PrivateRoute'
import { AtomSpinner } from 'react-epic-spinners'

const Blogs = lazy(() => import('./Blogs'))
const Contact = lazy(() => import('./Contact'))
const BlogPost = lazy(() => import('./BlogPost'))
const AddBlog = lazy(() => import('./AddBlog'))
const Login = lazy(() => import('./Login'))
const Search = lazy(() => import('./Search'))

const initialState = { loading: true, authenticated: false, currentUser: null }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: action.loading
      }
    case 'authenticated': 
      return {
        loading: false,
        authenticated: true,
        currentUser: action.user
      }
    default:
      return state
  }
}

export default function Routes () {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
      dispatch({type: 'loading', loading: true})
      let unsubscribe = config.auth().onAuthStateChanged(user => {
        if(user) 
          dispatch({
            type: 'authenticated',
            user
          })
        else 
          dispatch({type: 'loading', loading: false})
      })

      return () => unsubscribe()
    }, [])   

    const { authenticated, loading } = state
    if (loading) {
        return <AtomSpinner className="loading" color="#22d5c3" />;
    }
        
    return(
      <Suspense fallback={loading}>
        <Router>
          <React.Fragment>
              <Route exact path="/" component={App} />
              <Route exact path="/blog" component={(props) => <Blogs {...props} />} />
              <Route exact path="/contact" component={() => <Contact />} />
              <Route path="/blog/:path" component={(props) => <BlogPost {...props}/>} />
              <PrivateRoute exact path="/yote" component={AddBlog} authenticated={authenticated}/>
              <Route exact path="/yeet" component={(props) => <Login {...props} />} />
              <Route path="/search" component={() => <Search />} />
          </React.Fragment>
        </Router>
      </Suspense>
    )      
}
