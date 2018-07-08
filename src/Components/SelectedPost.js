import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Types from '../Actions/index';

const SelectedPost = (props) => {
    const id = props.match.params.id;
    const renderSelectedPost = props.getPost(id);
    return (
        <div className='post'>
            <Link exact='true' to='/'>Back to Posts</Link>
            <div>
                <button onClick={() => {
                    props.history.push('/');
                    props.deletePost(id);
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch({type: Types.DELETE_POST, deletedId: id})
    }
}

export default connect(null, mapDispatchToProps)(SelectedPost);