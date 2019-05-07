import React, { Component } from 'react';
import Navbar from './Navbar';
import { db } from "./Firebase";
import { storage } from './Firebase';

const addBlog = async (props, e) => {
    e.preventDefault()
    let image = e.target.image.files[0]
    const storageRef = storage.ref().child('images/' + image.name)
    let blog = {
        author: e.target.author.value,
        contents: e.target.contents.value.split('\n'),
        date: new Date().toISOString().substring(0, 10),
        social: e.target.social.value,
        title: e.target.title.value,
        path: e.target.path.value
    }
    await storageRef.put(image)
    .then(() => storageRef.getDownloadURL().then(url => {
        return db.collection('articles').add({
            ...blog,
            image: url
        })
    }))
    
    props.history.push('/blog')
}

const AddBlog = (props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <form className="form" encType="multipart/form-data" onSubmit={(e) =>addBlog(props, e)}>
                    <div className="form-group">
                        <label htmlFor="title">Title of your article</label>
                        <input type="text"  required className="form-control loginbar" name="title" placeholder="Donald Trump and the Power of Disappointment"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="path">Path (Note that this will be the URI for your article)</label>
                        <input type="text" name="path" required className="form-control loginbar" placeholder="donald-trump"/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="date">When was this article written?</label>
                        <input type="date"  name="date" className="form-control loginbar"/>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="author">Who wrote this article</label>
                        <input type="text" name="author" required className="form-control loginbar" placeholder="Hillary Clinton"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Add an image link to your article</label>
                        <input type="file" name="image" required className="form-control loginbar"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="social">Link to the author's social media (any one)</label>
                        <input type="url"  name="social" required className="form-control loginbar" placeholder="https://facebook.com/username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contents">Paste your article here</label>
                        <textarea type="text"  name="contents" required rows="10" className="form-control loginbar" placeholder="Just use the next line for new paragraphs.."/>
                    </div>
                    <input style={{marginBottom:`15px`}} type="submit" value="submit"/>
                </form>
            </div>
        </div>
    )
}

export default AddBlog;
