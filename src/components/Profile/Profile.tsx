import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://www.breakflip-awe.com/uploads2/Pierre-Louis/the-social-netwrok-streaming.png"
                    alt="cover"/>
            </div>
            <div>
                AVATAR
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;