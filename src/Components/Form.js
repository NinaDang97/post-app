import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Types from '../Actions';
//redux-form
import { reduxForm, Field, getFormSyncErrors } from 'redux-form';
import Input from './Input';
import uniqid from 'uniqid';

class Form extends Component {
    handleValidate = (...args) => { //value, allValues, props, name
        const value = args[0];
        let warning = '';
        if(!value){
            warning = 'Enter the value';
        }
        //other validation: maxlength, minlength, ...
        return warning;
    }

    onSave = (value) => {
        const id = this.props.action === 'Edit' ? this.props.match.params.id : uniqid();
        const newPost = {...value, id}; //object
        this.props.getPostSave(newPost); //dispatch
        this.props.history.push('/');
    }

    onCancel = () => {
        const {action, history} = this.props;
        const id = action === 'Edit' ? this.props.match.params.id : null;
        action === 'Submit' ? history.push(`/`) : history.push(`/posts/${id}`);
    }
    
    render(){
        const {handleSubmit} = this.props;
        console.log(this.props.syncErr);
        return (
            <form onSubmit={handleSubmit(this.onSave)}>
                <div className='title'>
                    <Field label='Title' name='title' type='text' component={Input} validate={this.handleValidate} />
                </div>
                <div className='category'>
                    <Field label='Category' name='category' type='text' component={Input} validate={this.handleValidate} />
                </div>
                <div className='content'>
                    <Field label='Write a new post' name='content' type='textarea' component={Input} validate={this.handleValidate} />
                </div>
                {/* type submit is default */}
                <button type='submit'>Save</button> 
                <button type='button' onClick={this.onCancel}>Cancel</button>
                
            </form>
            
        )
    }
}

const mapStateToProps = (state, props) => {
    const posts = Object.values(state.posts)
    const id = props.action === 'Edit' ? props.match.params.id : null;
    const foundPost = id 
    ? posts.find(val => val.id === id) 
    : {title: '', category: '', content: ''};
    return {
        syncErr: getFormSyncErrors('postForm')(state),
        initialValues: {
            title: foundPost.title,
            category: foundPost.category,
            content: foundPost.content
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPostSave: (savedPost) => dispatch(Types.savePost(savedPost))
    }
}

Form = reduxForm({form: 'postForm'})(Form);
Form = connect(mapStateToProps, mapDispatchToProps)(Form);
export default Form;