import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
         <div className={s.posts}>
             <Post message={'Hello My Friend'}/>
             <Post message={'How are you?'}/>

         </div>

        </div>
    );
};

export default MyPosts;