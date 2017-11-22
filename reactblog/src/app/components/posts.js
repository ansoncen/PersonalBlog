import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts () {
        if(this.props.posts instanceof Array) {
            return this.props.posts.map((post, index) => {
                return (
                    <div key={post._id.$oid}>
                        <br />
                        <div className="mui--text-headline">
                            <Link to={`/blog/${post._id.$oid}`} className="mui--text-dark-secondary">
                            {post.title}
                            </Link>
                        </div>
                        <div className="mui--text-dark-secondary">By <span>{post.author}</span> on {post.time}</div>
                    </div>
                )
            });
        }
        else {
            return <p>Loading ...</p>;
        }
    }


    render () {
        return (
            <div className="mui-row">
                <div className="mui-col-sm-10 mui-col-sm-offset-1">
                    <br />
                    <br />
                    <div className="mui--text-dark-secondary mui--text-body2">My POSTS</div>
                    <div className="mui-divider"></div>
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(Posts);
