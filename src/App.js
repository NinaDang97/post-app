import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import SelectedPost from './Components/SelectedPost';
import { NotFound } from './Components/NotFound';
import { connect } from 'react-redux';

class App extends Component {
  getSelectedPost = (id) => {   
    const {posts} = this.props;
    return posts[id];
  }

  render() {
    const {posts} = this.props;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Home posts={posts} />} />
          <Route exact path='/posts/newpost' render={(props) => <Form {...props} action='Submit' />} />
          <Route exact path='/posts/:id' render={(props) => <SelectedPost {...props} getPost={this.getSelectedPost} />}  />
          <Route exact path='/posts/:id/edit' render={(props) => <Form {...props} getPost={this.getSelectedPost} action='Edit' />} />
          <Route exact path='/*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps, null)(App);
