import {combineReducers} from 'redux';
import PostsReducer from './posts_reducer';

const myReducer = combineReducers({
    posts: PostsReducer,
})

export default myReducer;