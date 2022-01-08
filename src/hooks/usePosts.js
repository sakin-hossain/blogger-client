import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from "./useAuth";

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [activeUserPosts, setActiveUserPosts] = useState([]);
    const [size, setSize] = useState(10);
    const {user} = useAuth();
    
    const handlePost = (posts, title) => {
        const post = {
            name: user.displayName,
            email: user.email,
            date: new Date(),
            title: title,
            post: posts,
            comments : []
        }
        axios.post('http://localhost:5000/posts', post)
        .then(res => {
            if (res.data.acknowledged) {
                alert('Post successfully');
            }
        })
    }
    let postPerPage = 10;
    useEffect(()=>{
        fetch(`http://localhost:5000/posts?size=${size}`)
        .then(res => res.json())
        .then(data => {setPosts(data)})
    }, [size, posts]);

    useEffect(()=>{
        fetch(`http://localhost:5000/posts/${user.email}`)
        .then(res=> res.json())
        .then(data => setActiveUserPosts(data))
    }, [user.email]);

    const handleLoadMore = () =>{
        setSize(parseInt(size) + postPerPage);
    }

    return { handlePost, posts, activeUserPosts, handleLoadMore }
};

export default usePosts;