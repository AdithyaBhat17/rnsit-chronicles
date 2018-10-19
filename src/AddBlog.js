import React, { Component } from 'react';
import Navbar from './Navbar';
import firebase from "./Firebase";

class AddBlog extends Component {
    constructor(props){
        super(props);
        this.addBlog = this.addBlog.bind(this);
    }

    addBlog = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        db.collection('articles').add({
            author: e.target.author.value,
            contents: e.target.contents.value.split('\n'),
            image: e.target.image.value,
            date: e.target.date.value,
            social: e.target.social.value,
            title: e.target.title.value,
            path: e.target.path.value,
        });
        e.target.author.value = ""
        e.target.contents.value= ""
        e.target.image.value = ""
        e.target.date.value = ""
        e.target.social.value = ""
        e.target.title.value = ""
        e.target.path.value = ""
        this.props.history.push('/blog')
    }

    render() {
        return (
        <div>
            <Navbar />
            <div className="container">
                <form className="form" onSubmit={(e) =>this.addBlog(e)}>
                    <div className="form-group">
                        <label htmlFor="title">Title of your article</label>
                        <input type="text" required className="form-control loginbar" name="title" placeholder="Donald Trump and the Power of Disappointment"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="path">Path (Note that this will be the URI for your article)</label>
                        <input type="text" required name="path" className="form-control loginbar" placeholder="donald-trump"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">When was this article written?</label>
                        <input type="date" required name="date" className="form-control loginbar"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Who wrote this article</label>
                        <input type="text" required name="author" className="form-control loginbar" placeholder="Hillary Clinton"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Add an image link to your article</label>
                        <input type="url" required name="image" className="form-control loginbar" placeholder="https://website.com/image.png"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="social">Link to the author's social media (any one)</label>
                        <input type="url" required name="social" className="form-control loginbar" placeholder="https://facebook.com/username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contents">Paste your article here</label>
                        <textarea type="text" required name="contents" rows="10" className="form-control loginbar" placeholder="Just use the next line for new paragraphs.."/>
                    </div>
                    <input style={{marginBottom:`15px`}} type="submit" value="submit"/>
                </form>
            </div>
        </div>
        );
    }
}

export default AddBlog;
