import React, { Component } from 'react';
import Header from './header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class Post extends Component {
    componentDidMount() {
        document.title = "Blog";
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

     renderPost () {
        const { post } = this.props.posts;
        if (!post) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div>
                    <div className="mui--text-headline">{post.title}</div>
                    <div className="mui--text-dark-secondary">By {post.author} on {post.time}</div>
                    <br />
                    <div>
                        {post.text}
                    </div>
                </div>
            );
        }
    }

    render () {
        return (
            <div>
                <Header />
                <div id="content" className="mui-container-fluid">
                    <div className="mui-row">
                        <div className="mui-col-sm-10 mui-col-sm-offset-1">
                            <br />
                            <div className="mui--text-dark-secondary mui--text-body2">POST</div>
                            <div className="mui-divider"></div>
                            <br />
                            {this.renderPost()}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPost })(Post);
