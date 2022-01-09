import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const EditPost = () => {
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const {id} = useParams();
    console.log(id);
    
    const handleEdit = (title, post) => {
        console.log(title,post);
        axios.put(`https://serene-garden-66797.herokuapp.com/posts`, {
            id: id,
            title: title,
            post: post
        })
        .then(res => {
            if (res.data.modifiedCount) {
                alert("Edited successful");
            }})
    }

    return (
        <Container>
            <h1>Please update your post</h1>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' />
            <textarea onChange={(e)=>{setPost(e.target.value)}} placeholder='Edit Description' rows="10"></textarea>
            <button onClick={() =>handleEdit(title, post)}>Update</button>
            <Link to='/profile'>
                <button>
                    Go Back
                </button>
            </Link>
        </Container>
    );
};
const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    margin-top: 30px;
    input{
        padding: 10px 24px;
        margin: 10px 0;
    }
    textarea{
        resize: none;
        margin: 10px 0;
    }
    button{
        padding: 10px 24px;
        margin: 10px auto;
        width: 15%;
        font-weight: 600;
    }
`;
export default EditPost;