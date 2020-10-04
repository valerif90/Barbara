import React from "react";
import './Post.module.css'

const Post = (props) => {
        return (
        <article>
            <div className='item'>{props.message}, {props.likesCount}</div>
            <span>likes</span>
        </article>
    )
};

export default Post;
