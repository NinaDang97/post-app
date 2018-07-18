import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Types from '../Actions/index';
import { NotFound } from './NotFound';

const SelectedPost = (props) => {
    const id = props.match.params.id;
    const renderSelectedPost = props.getPost(id);
    if(renderSelectedPost) {
        return (
            <div className='post'>
                <Link exact='true' to='/'>Back to Posts</Link>
                <div>
                    <button onClick={() => {
                        props.history.push('/');
                        props.getPostDelete(id);
                    }}>Delete</button>
                    <button onClick={() => {
                        props.history.push('/posts/'+ id + '/edit');
                    }}>Edit</button>
                </div>
                <div>
                    <h4>Title</h4>
                    <p>{renderSelectedPost.title}</p>
                    <h4>Category</h4>
                    <p>{renderSelectedPost.category}</p>
                    <h4>Content</h4>
                    <p>{renderSelectedPost.content}</p>
                </div>
            </div>
        )
    } else {
        return (
            <NotFound />
        )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostDelete: (deletedId) => dispatch(Types.deletePost(deletedId))
    }
}

export default connect(null, mapDispatchToProps)(SelectedPost);