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
        }
        axios.post('http://localhost:5000/posts', post)
        .then(res => {
            if (res.data.acknowledged) {
                console.log('done');
            }
        })
    }
    let postPerPage = 10;
    useEffect(()=>{
        fetch(`http://localhost:5000/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    useEffect(()=>{
        fetch(`http://localhost:5000/posts/${user.email}`)
        .then(res=> res.json())
        .then(data => setActiveUserPosts(data))
    }, [user.email]);

    const handleLoadMore = () =>{
        setSize(size + postPerPage);
    }

    return { handlePost, posts, activeUserPosts, handleLoadMore }
};

export default usePosts;