import React from 'react';
import styled from 'styled-components';

const CommentShow = ({comments}) => {

    return (
        <div>
            <CommentArea>
                {
                    comments.map(cm=>
                        <div key={cm?.date}>
                            <span>{cm?.user}</span>
                            <span>{cm?.email}</span>
                            <span>{cm?.date}</span>
                            <p>{cm?.comment}</p>
                        </div>
                        )
                }
            </CommentArea>
        </div>
    );
};
const CommentArea = styled.div`
    text-align: left;
    div{
        border: 1px solid rgba(0,0,0,0.5);
        width: 40%;
        border-radius: 4px;
        margin: 10px 5px;
        padding: 5px;
    }
    span{
        font-size: 14px;
        margin-right: 10px;
    }
    p{
        font-weight: 500;
    }
`;
export default CommentShow;