import React from 'react';
import s from './Post.module.css'

type PostType = {
    message:string;
}

export const Post = (props:PostType) => {
    return (
        <div>

            <div className={s.item}>
                <img
                    src={'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213245707/original/66a67e36fe8227d15c8c310cc112b60e74af5d6f/design-avatar-cartoon-for-business-gaming-social-media.jpg'}
                    alt={'Avatar'}/>
                {props.message}

                <div>
                    <span>Like</span>
                </div>


            </div>
        </div>
    );
};

