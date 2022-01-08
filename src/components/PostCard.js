import React, { useState } from 'react';
import styled from 'styled-components';
import usePosts from '../hooks/usePosts';

const PostCard = () => {
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const { handlePost } = usePosts();
    const handlePostChange = (post, title) => {
        if(post === '' || title === ''){
            alert('Please Write Something');
            return;
        }
        else{
            handlePost(post, title);
        }
    }
    return (
        <CommonCard>
            <SharedContent>
                <UserInfo>
                    <img src="/images/user.png" alt="" />
                    <span>Name</span>
                </UserInfo>
                <Post>
                    <input
                        placeholder='Title of your post' 
                        onChange={e => setTitle(e.target.value)}
                        type="text" />
                    <textarea
                        onChange={e => setPost(e.target.value)}
                        placeholder="Express something what's on your mind..."
                    ></textarea>
                </Post>
            </SharedContent>
            <PostButton onClick={()=>handlePostChange(post, title)}>Post</PostButton>
        </CommonCard>
    );
};
const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 12px;
`;
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;
const Post = styled.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-height: 80px;
        resize: none;
        outline: none;
    }
    input{
        width: 100%;
        min-height: 25px;
        margin-bottom: 5px;
        outline: none;
    }
`;
const PostButton = styled.button`
    border-radius: 24px;
    padding: 10px 40px;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0,0,0,0.7);
    font-size: 14px;
    border: 1.5px solid rgba(0,0,0,0.6);
    font-weight: 700;
    margin: 0 auto;
    margin-bottom: 20px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.15);
        color: initial;
    }
`;
export default PostCard;