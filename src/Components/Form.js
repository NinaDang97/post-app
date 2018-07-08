import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Types from '../Actions/index';

class Form extends Component {
    constructor(props){
        super(props);
        
        const id = 
            (this.props.match.params.id
            ? Number(this.props.match.params.id)
            :  Math.floor(Math.random() * 1000 + 5));
        
        const getPost = this.props.getPost;
        const title = getPost ? getPost(id).title : '';
        const category = getPost ? getPost(id).category : '';
        const content = getPost ? getPost(id).content : '';
        this.state = {
            id,
            title,
            category,
            content
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {...this.state, id: Math.floor(Math.random() * 1000 + 5)};
        this.props.submitPost(newPost);
        this.props.history.push('/');
    }

    handleSubmitCancel = () => {
        this.props.history.push('/');
    }

    handleEdit = (e) => {
        e.preventDefault();
        const post = {...this.state};
        this.props.editPost(post);
        this.props.history.push('/posts/' + this.state.id);
    }

    handleEditCancel = () => {
        this.props.history.push('/posts/' + this.state.id);
    }

    render(){
        const {action} = this.props;
        return (
            <form>
                <div className='title'>
                    <label>Title: </label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className='category'>
                    <label>Category: </label>
                    <input type='text' name='category' value={this.state.category} onChange={this.handleChange} />
                </div>
                <div className='content'>
                    <label>Write new post: </label>
                    <textarea rows='5' name='content' value={this.state.content} onChange={this.handleChange}></textarea>
                </div>
                <button type='submit' onClick={this[`handle${action}`]} >Save</button>
                <button type='button' onClick={this[`handle${action}Cancel`]}>Cancel</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitPost: (newPost) => dispatch({type: Types.SUBMIT_POST, newPost}),
        editPost: (editPost) => dispatch({type: Types.EDIT_POST, editPost})
    }
}

export default connect(null, mapDispatchToProps)(Form);