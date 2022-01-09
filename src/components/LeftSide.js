import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';

const LeftSide = () => {
  const { users, activeUser } = useUser();
  const {user} = useAuth();

    return (
        <Container>
            <ArtCard>
                <UserInfo>
                <CardBackground />
                    <p>
                        <Photo />
                        <Title>Welcome, {activeUser?.name}!</Title>
                    </p>
                </UserInfo>
                <Link to={'/profile'}>Your Profile</Link> <br />
                <Link to={'/alluser'}>All User Data</Link>
            </ArtCard>
        </Container>
    );
};
const Container = styled.div`
  grid-area: leftside;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  a{
    color: black;
    font-weight: 600;
    text-decoration: none;
  }
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.png");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/user.png");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Title = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

export default LeftSide;