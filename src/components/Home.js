import React from 'react';
import styled from "styled-components";
import Header from './Header';
import LeftSide from './LeftSide';
import Main from './Main';

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <Layout>
                    <LeftSide/>
                    <Main/>
                </Layout>
            </Container>
        </>
    );
};

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main";
    grid-template-columns: minmax(0, 2fr) minmax(0, 12fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

export default Home;