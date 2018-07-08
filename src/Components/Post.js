import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Post extends Component {
    render(){
        return (
            <Link exact='true' to={`posts/${this.props.id}`}>
                <div className='post post-decor'>
                    <div>{this.props.title}</div>
                    <div>{this.props.category}</div>
                </div>
            </Link>
        ) 
    }
}

export default connect()(Post);