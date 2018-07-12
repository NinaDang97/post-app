export const SAVE_POST = 'SAVE_POST';
export const DELETE_POST = 'DELETE_POST';
export const SELECT_POST = 'SELECT_POST';

export const savePost = (savedPost) => {
    return {
        type: SAVE_POST,
        savedPost
    }
}

export const deletePost = (deletedId) => {
    return {
        type: DELETE_POST,
        deletedId
    }
}

export const selectPost = (selectedPost) => {
    return {
        type: SELECT_POST,
        selectedPost
    }
}