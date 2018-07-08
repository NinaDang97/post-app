import React from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';

const Home = (props) => {   
    const {posts, history} = props;
    const printPosts = Object.values(posts).map((post) => <Post key={post.id} {...post} history={history} />);
    return (
        <div className='home'>
            <Link exact='true' to='/posts/newpost'>
                <button type='button' className='addPost'>
                    Add Post
                </button>
            </Link>

            <div className='postList'>
                {printPosts}
            </div>    
        </div>    
    )    
}

export default Home;