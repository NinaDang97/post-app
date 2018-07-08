import _ from 'lodash';
import * as Types from '../Actions/index';

const initialPosts =  [
    {
        id: 1,
        title: 'Javascript',
        category: 'Programming',
        content: 'JS is a popular programming language'
    },
    {
        id: 2,
        title: 'Puppy',
        category: 'Pey',
        content: 'Puppies bring happiness for everyone'
    },
    {
        id: 3,
        title: 'Paris',
        category: 'Travel',
        content: 'The most romantic city in the world'
    }
]

const hashPosts = _.mapKeys(initialPosts, 'id');

const PostsReducer = (state = hashPosts, action) => {
    switch(action.type){
        case Types.SUBMIT_POST:
            const newPostAdded = _.mapKeys([action.newPost], 'id');
            return {...state, ...newPostAdded};
        case Types.DELETE_POST:
            delete state[action.deletedId];
            return {
                ...state
            }
        case Types.EDIT_POST:
            const editPost = _.mapKeys([action.editPost], 'id');
            return {
                ...state, ...editPost
            }
        default: 
            return state;
    }    
}

export default PostsReducer;