import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Header from './Header';
import { Article, Description, SharedActor, SocialAction, SocialCount } from './Main';
import { Content, UserInfo } from './YourProfile';

const UsersProfile = () => {
    const [activeUserPost ,setActiveUserPost] = useState([]);
    const {id} = useParams();
    const {users} = useUser();

    const matchUser = users.find(user => user._id === id);
    
    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => setActiveUserPost(data.filter(post => post.email.toLowerCase().includes(matchUser.email))))
    }, [matchUser]);

    return (
        <div>
            <Header/>
            <Content>
                <UserInfo>
                    <h1>{matchUser?.name}</h1>
                    <img src={`data:image/png;base64,${matchUser?.image}`} alt="" />
                </UserInfo>
                {
                    activeUserPost ? activeUserPost.map(post => 
                        <Article key={post?._id}>
                            <SharedActor>
                                <a>
                                    <img src="/images/user.png" alt="user" />
                                    <div>
                                        <span>{post?.name}</span>
                                        <span>{post?.email}</span>
                                        <span>{post?.date}</span>
                                    </div>
                                </a>
                            </SharedActor>
                            <Description>
                                {post?.post}
                            </Description>
                            <SocialCount>
                                <li>
                                    <button>
                                        <ThumbUpRoundedIcon color="primary" fontSize="small" />
                                        <span>1</span>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <CommentRoundedIcon color="action"
                                        fontSize="small"
                                        />
                                        <span>1</span>
                                    </button>
                                </li>
                            </SocialCount>
                            <SocialAction>
                                <button>
                                    <ThumbUpRoundedIcon color="primary" />
                                    <span>Like</span>
                                </button>
                                <button>
                                    <CommentRoundedIcon color="action"/>
                                    <span>Comment</span>
                                </button>
                            </SocialAction>
                        </Article>
                        ) :
                        <h1>No Post</h1>
                    }
            </Content>
        </div>
    );
};

export default UsersProfile;