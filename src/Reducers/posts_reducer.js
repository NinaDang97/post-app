import _ from 'lodash';
import * as Types from '../Actions/index';
import { data as posts } from '../Data';

const hashPosts = _.mapKeys(posts, 'id');

const PostsReducer = (state = hashPosts, action) => {
    switch(action.type){
        case Types.SAVE_POST:
            const savedPost = _.mapKeys([action.savedPost], 'id');
            return {...state, ...savedPost};
        case Types.DELETE_POST:
            delete state[action.deletedId];
            return {
                ...state
            }
        default: 
            return state;
    }    
}

export default PostsReducer;