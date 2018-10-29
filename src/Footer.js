import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
            <p style={{textAlign:`center`}}>Built with<img width="50" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react"/> by
            &nbsp;<a style={{color:`#22d5c3`, fontWeight:`bold`}} target="_blank" rel="noopener noreferrer" href="https://adithyabhat.com">Adithya NR</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;