import React from 'react';
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className={s.content}>
            Контент
            <div>
                <img
                    src="https://abrakadabra.fun/uploads/posts/2022-02/1646004561_17-abrakadabra-fun-p-fon-dlya-oblozhki-vk-19.jpg"
                    alt="content"/>
            </div>
            <div>
                AVATAR
            </div>
            <div>
                My Posts
                <div>
                    NEW POST
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;