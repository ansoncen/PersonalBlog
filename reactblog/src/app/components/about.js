import React, { Component } from 'react';
import Header from './header';
import Posts from './posts';

export default class About extends Component {
    componentDidMount(){
        document.title = "About Me";
    }

    render () {
        return (
            <div>
                <Header />
                <div id="content" className="mui-container-fluid">
                    <div className="mui-row">
                        <div className="mui-col-sm-10 mui-col-sm-offset-1">
                            <div className="mui-col-xs-12 mui-col-md-8">
                                <br />
                                <br />
                                <div className="mui--text-title center">About Me</div>
                                <br />
                                <p className="mui--text-body center">
                                    Born in Shanghai, China in Aug. 1993.<br />
                                    Currently live and work in Melbourne.<br />
                                </p>
                                <br />
                                <p className="mui--text-body center">
                                    Bachelor of Science, Software and Computing System<br />
                                    University of Melbourne, Dec. 2016<br />
                                </p>
                                <br />
                                <p className="mui--text-body center">
                                    Developer<br />
                                </p>
                                <p className="mui--text-body center">
                                    Less is more.<br />
                                </p>
                                <br />
                                <div className="mui--text-title center">Find Me</div>
                                <br />
                                <p className="mui--text-body center">
                                    censihan@gmail.com<br />
                                    <a href="https://www.linkedin.com/in/censihan/"><i className="fa fa-linkedin-square" aria-hidden="true"></i> Sihan Cen</a>
                                </p>
                            </div>
                            <div className="mui-col-xs-12 mui-col-md-3">
                                <br />
                                <br />
                                <div className="pad">
                                    <img className="profile-img" src="/static/images/profile.jpeg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
