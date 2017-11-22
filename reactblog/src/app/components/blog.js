import React, { Component } from 'react';
import Header from './header';
import Posts from './posts';

export default class Blog extends Component {
    componentDidMount(){
        document.title = "Blog";
    }

    render () {
        return (
            <div>
                <Header />
                <div id="content" className="mui-container-fluid">
                    <Posts />
                </div>
            </div>
        );
    }
}
