import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import usePosts from '../hooks/usePosts';
import useUser from '../hooks/useUser';
import Header from './Header';
import { Article, Description, SharedActor, SocialAction, SocialCount } from './Main';
import PostCard from './PostCard';

const YourProfile = () => {
    const { activeUser } = useUser();
    const {activeUserPosts} = usePosts();
    const handlePostDelete = (id) =>{
        const proceed = window.confirm('Are you sure? Delete this post ?');
        if(proceed){
            axios.delete(`http://localhost:5000/post/${id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Delete Successful!')
                }
            })
        }
    }

    return (
        <Container>
            <Header/>
            <Content>
                <PostCard/>
                <UserInfo>
                    <h1>{activeUser.name}</h1>
                    <img src={`data:image/png;base64,${activeUser?.image}`} alt="" />
                </UserInfo>
                {
                    activeUserPosts.map(post => 
                        <Article key={post._id}>
                            <SharedActor>
                                <a>
                                    <img src="/images/user.png" alt="user" />
                                    <div>
                                        <span>{post?.name}</span>
                                        <span>{post?.email}</span>
                                        <span>{post?.date}</span>
                                    </div>
                                </a>
                                <div>
                                    <button onClick={() => handlePostDelete(post._id)}>
                                        <DeleteRoundedIcon/>
                                    </button>
                                    <Link to={`/edit/${post._id}`}>
                                        <button>
                                            <ModeEditOutlineIcon/>
                                        </button>
                                    </Link>
                                </div>
                            </SharedActor>
                            <Description>
                                {post.post}
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
                        )
                    }
            </Content>
        </Container>
    );
};
const Container = styled.div``;
export const Content = styled.div`
    position: relative;
    top: 80px;
    width: 75%;
    margin: 0 auto;
`;
export const UserInfo = styled.div`
    margin: 25px 0;
    text-align: center;
    h1{
        font-size: 30px;
    }
    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        padding: 5px;
        margin: 15px 0;
        border: 2px solid rgba(0,0,0,0.5);
    }
`
export default YourProfile;