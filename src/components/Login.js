import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Nav>
                <Link to="/">
                    <h2>Blogger</h2>
                </Link>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to Blogger, express your think here.</h1>
                    <img src="/images/login-section.png" alt="login banner" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="google icon" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    /* max-width:1128px; */
    margin:auto;
    padding: 12px 0 16px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap: nowrap;
    /* @media (max-width: 480px) {
        max-width: 600px;   
    } */

    & > a{
        width:120px;
        text-decoration: none;
        color: black;
        @media (max-width: 480px) {
            padding: 0px;
    }
}
    & h2{
        font-size: 20px;
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 20px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    border-radius: 24px;
    font-weight: 600;
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0,0,0,0.7);
        text-decoration: none;   
    }
`;
const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px lightgray;
    color: gray;
    border-radius: 24px;
    transition-duration: 170ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    padding-bottom: 100px;
    padding-top: 40px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    margin: auto;
    @media(max-width: 480px){
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: gray;
        font-weight: 200;
        @media(max-width: 480px){
            text-align: center;
            font-size: 24px;
            line-height: 2;
            width: 100%;
        }
    }

    img{
        border-radius: 4px;
        width: 600px;
        position: absolute;
        bottom: -2px;
        right: 10px;
        @media (max-width: 480px){
            top: 230px;
            width: 395px;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 400px;
    @media (max-width: 480px) {
        margin-top: 20px;
    }
`;
const Google = styled.button`
    display: flex;
    justify-content: center;
    background: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    border: 1.5px solid rgba(0,0,0,0.6);
    color: rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

export default Login;