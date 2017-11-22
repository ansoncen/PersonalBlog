import React, { Component } from 'react';
import Header from './header';
import Posts from './posts';

export default class Home extends Component {
    componentDidMount(){
        document.title = "Home";
    }

    render () {
        return (
            <div>
                <Header />
                <div id="content" className="mui-container-fluid">
                    <div className="mui-row">
                        <div className="mui-col-sm-10 mui-col-sm-offset-1">
                            <br />
                            <br />
                            <div>
                                <div className="mui--text-display2">Less is More</div>
                                <div className="mui--text-subhead">A Simple Blog Powered By React, Serverless And MongoDB Atlas.</div>
                                <br />
                                <div className="mui-divider"></div>
                                <br />
                                <div className="mui--text-Body1">
                                    This project is inspired by the Serverless framework. <br />
                                    It is a good starter for those who want to learn the Serverless framework with AWS Lambda. <br />
                                    Some posts required some loading time due to the budget (I am using the Free trial on AWS and MongoDB Altas).<br />
                                    Following features are still under development (not guarantee): User Authorisation, Post Compose and Edit, Post Comment.
                                </div>
                                <div className="mui-row">
                                    <div className="mui-col-sm-12 mui-col-md-4 center">
                                        <img className="logo" src="/static/images/react-redux.png"/>
                                    </div>
                                    <div className="mui-col-sm-12 mui-col-md-4 center">
                                        <img className="logo" src="/static/images/serverless.png"/>
                                    </div>
                                    <div className="mui-col-sm-12 mui-col-md-4 center">
                                        <img className="logo" src="/static/images/MongoDB.png"/>
                                    </div>
                                </div>
                                <br />
                                <div className="mui-divider"></div>
                                <br />
                                <div className="mui--text-subhead text-right">View This Project On  <a href="https://github.com/ansoncen/PersonalBlog"><i className="fa fa-github" aria-hidden="true"></i> GitHub.</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
