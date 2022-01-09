import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [isRegistered, setIsRegistered] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const { authError, registerUser, loginUser } = useAuth();
    const navigate = useNavigate();

    const checkedIsLogin = e => {
        setIsRegistered(e.target.checked)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('image', image);
        loginUser(email, password, navigate);
        registerUser(email, password, name, navigate);

        fetch('https://serene-garden-66797.herokuapp.com/users',{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data.insertedId))
      };
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
                <form onSubmit={handleSubmit}>
                    {
                        isRegistered && <>
                        <label>Name</label>
                        <Input
                            onChange={(e)=> setName(e.target.value)}
                        /> <br />
                        </>
                    }
                    <label>Email</label>
                    <Input
                        onChange={(e)=> setEmail(e.target.value)}
                    /> <br />
                    <label>Password</label>
                    <Input 
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password"/> <br />
                    {
                        isRegistered && 
                        <label htmlFor="contained-button-file">
                            <InputPhoto accept="image/*" id="contained-button-file" 
                            required
                            onChange={(e)=> setImage(e.target.files[0])}
                            type="file" />
                            <Button sx={{width: "100%", margin:"10px 0", color:"black", border:"1.5px solid rgba(0,0,0,0.6)"}}
                            variant="outlined" component="span">
                            Upload your photo
                            </Button>
                        </label>
                    }
                    <input onClick={checkedIsLogin} type="checkbox" id="registered"/>
                    <label htmlFor="registered"> Not Registered ? Please click for register</label><br/>
                    {
                        isRegistered ? <input style={AuthButton} value="Register" type="submit" /> : <input style={AuthButton} value="Login" type="submit" />
                    }
                </form>
                {
                    authError && <p>{authError}</p>
                }
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
const Input = styled.input`
    width: 100%;
    margin: 10px 0;
    padding: 10px 0;
    outline: none;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    border: 1.5px solid rgba(0,0,0,0.6);
`;
const InputPhoto = styled('input')({
    display: 'none',
  });
const AuthButton = {
    width: "100%",
    border: "1.5px solid rgba(0,0,0,0.6)",
    outline: "none",
    background: "transparent",
    padding: "10px 24px",
    borderRadius: "24px",
    margin: "10px 0",
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.6)",
    fontWeight: "600",
    cursor: "pointer"
}
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
    cursor: pointer;
    border: 1.5px solid rgba(0,0,0,0.6);
    color: rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

export default Login;