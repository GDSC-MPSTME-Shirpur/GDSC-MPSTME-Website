import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Container id='home'>
            <HomeLeft>
                <img src='/images/HomePageLogo.jpg' alt='Oh! Image Not found.'/>
            </HomeLeft>
            <HomeRight>
                <img src='/images/homeGif' alt='Oh!' />
            </HomeRight>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
    display: flex;
    padding: 40px;
    justify-content: center;
    align-items: center;    
    @media (max-width: 756px)
    {
        flex-direction: column;
        justify-content: flex-start;
    }
`;
const HomeLeft = styled.div`
    margin: 10px;
    margin-right: 40px;
    img{
        width: 500px;
        fit-content: contain;
    }
    @media (max-width: 756px)
    {
        margin-right: 10px;
        img{
            width: 300px;
        }
    }
`;
const HomeRight = styled.div`
    img{
        margin: 10px;
        width: 450px;
        fit-content: contain;
    }
    @media (max-width: 756px)
    {
        img{
            width: 250px;
        }
    }
`;