import React, { Component } from 'react';
import { Link } from 'react-router'

class Posts extends Component {
    render() {
        return (
            <div>
                <h2>Posts</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul>
                            <li>title</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;