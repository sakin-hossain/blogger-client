
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';

const Header = () => {
  const {user, logOut} = useAuth();
  const { activeUser } = useUser();
    return (
        <Container>
            <Content>
                <Logo>
                    <Link to='/'>
                        <h6>Blogger</h6>
                    </Link>
                </Logo>
                <User>
                    <a>
                        {
                          user ? <img src={`data:image/png;base64,${activeUser?.image}`} alt="" /> : <img src="/images/user.png" alt="" />
                        }
                        <span>{activeUser?.name}</span>
                        <img src="/images/down-icon.svg" alt="" />
                    </a>

                    <SignOut>
                        <button onClick={logOut}>Sign Out</button>
                    </SignOut>
                </User>
            </Content>
        </Container>
    );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  height: initial;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 100%;
`;
const Logo = styled.span`
  margin-left: 30px;
  margin-right: 10px;
  font-size: 20px;
  @media (max-width: 480px) {
      margin-left: 10px;
  }
  a{
      text-decoration: none;
      color: initial;
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 48px;
  right: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  font-weight: 700;
  background-color: rgb(30,20,10);
  button{
      border: none;
      outline: none;
      background: transparent;
      font-size: 14px;
      color: white;
      border-radius: 5px;
      cursor: pointer;
  }
`;

const User = styled.div`
    a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    right: 50px;
    text-decoration: none;
    }
    a > svg {
        width: 24px;
        border-radius: 50%;
    }
    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

export default Header;