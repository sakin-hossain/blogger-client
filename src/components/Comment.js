import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';

const Comment = ({id}) => {
    const [comment, setComment] = useState('');
    const { user } = useAuth();

    const handleCommentChange = (comment) =>{
        if(comment === ''){
            alert('Please Comment Something');
            return;
        }
        else{
            handleComment(comment);
        }
    }
    const handleComment = (comment) => {
        const comments = {
            user: user.displayName,
            email: user.email,
            comment: comment,
            date: new Date()
        }
        axios.put(`https://serene-garden-66797.herokuapp.com/post/${id}`, comments)
        .then(res => {
            if (res.data.modifiedCount) {
                alert("Comment added successfully");
            }})
    }
    return (
        <Container>
            <input type="text" onChange={e => setComment(e.target.value)} placeholder='Comment' />
            <button onClick={() => handleCommentChange(comment)}>Comment</button>
        </Container>
    );
};
const Container = styled.div`
    text-align: left;
    justify-content: space-between;
    input{
        min-width: 100px;
        padding: 8px 24px;
        border-radius: 24px;
        margin: 10px 20px;
        font-size: 14px;
        border: 1.5px solid rgba(0,0,0,0.4);
    }
    button{
        padding: 8px 15px;
        border-radius: 24px;
        border: 1.5px solid rgba(0,0,0,0.4);
        cursor: pointer;
        font-weight: 600;
    }
`;
export default Comment;