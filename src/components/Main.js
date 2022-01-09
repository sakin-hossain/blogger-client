// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import React from 'react';
import styled from 'styled-components';
import usePosts from '../hooks/usePosts';
import Comment from './Comment';
import CommentShow from './CommentShow';
import PostCard from './PostCard';

const Main = () => {
    const { posts, handleLoadMore }= usePosts();
    
    return (
        <Container>
            <PostCard/>
            {
                posts.map(post => 
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
                            <button>
                                <MoreHorizIcon/>
                            </button>
                        </SharedActor>
                        <Description>
                            <h3>{post.title}</h3>
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
                                    <span>{post.comments.length}</span>
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
                            <Comment id={post._id}/>
                            <CommentShow comments={post.comments}/>
                    </Article>
                    )
            }
            <Load onClick={handleLoadMore}>Load More</Load>
        </Container>
    );
};
const Container = styled.div`
    grid-area: main;
`;
export const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
export const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;
export const SharedActor = styled.div`
    padding: 12px 16px 0;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;
    img{
        width: 48px;
        height: 48px;
    }
    div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px;
        overflow: hidden;
    }
    span{
        text-align: left;
        &:first-child{
            font-size: 14px;
            font-weight: 700;
            color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n+1){
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
        }
    }
}
button{
    position: relative;
    left: 10px;
    top: -20px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}
`;
export const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,0.9);
    font-size: 14px;
    text-align: left;
    h3{
        font-size: 18px;
    }
`;
export const SocialCount = styled.ul`
    display: flex;
    align-items: flex-start;
    list-style: none;
    overflow: auto;
    margin: 0 16px;
    padding: 4px 0;
    li{
        margin-right: 10px;
        button{
            border: none;
            outline: none;
            background: transparent;
            display: flex;
            align-items: center;
            span{
                margin-left: 4px;
                font-weight: 600;
            }
        }
    }
`;
export const SocialAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    min-height: 40px;
    padding: 5px 10px;
    button{
        display: inline-flex;
        align-items: center;
        padding: 5px;
        margin-right: 8px;
        @media (max-width: 480px) {
            margin-left: 8px;
        }
        span{
            margin-left: 8px;
        }
    }
`;
const Load = styled.button`
    margin: 10px 0;
    padding: 10px 24px;
    border: 1.5px solid rgba(0,0,0,0.5);
    border-radius: 25px;
    font-weight: 700;
    cursor: pointer;
`;
const CommentArea = styled.div``

export default Main;