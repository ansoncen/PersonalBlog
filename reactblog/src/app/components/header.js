import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render () {
        return (
            <div id="sidebar">
                <div className="mui--text-light mui--text-display1 mui--align-vertical my-name">SIHAN CEN</div>


                <div className="mui--text-headline mui--align-vertical">
                    <Link className="mui--text-light" to="/">HOME</Link>
                </div>
                <div className="mui--text-headline mui--align-vertical">
                    <Link className="mui--text-light" to="/blog">BLOG</Link>
                </div>
                <div className="mui--text-light mui--text-headline mui--align-vertical">
                    <Link className="mui--text-light" to="/about">ABOUT ME</Link>
                </div>
            </div>
        );
    }
}
