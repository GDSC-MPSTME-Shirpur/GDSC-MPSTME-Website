import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Container>
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
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;    
    @media (max-width: 756px)
    {
        flex-direction: column;
    }
`;
const HomeLeft = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 500px;
        fit-content: contain;
    }
    @media (max-width: 756px)
    {
        width: 100vw;
        img{
            width: 300px;
        }
    }
`;
const HomeRight = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 450px;
        fit-content: contain;
    }
    @media (max-width: 756px)
    {
        width: 100vw;
        img{
            width: 250px;
        }
    }
`;