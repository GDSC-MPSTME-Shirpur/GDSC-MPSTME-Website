import React from 'react';
import styled from 'styled-components';
import About from './About';

function Home() {
    return (
        <div>
            {/* Home Page */}
        <Container id='home'>
            <HomeLeft>
                <img src='/images/HomePageLogo.jpg' alt='Oh! Image Not found.'/>
                <h3>Welcome to Google DSC at MPSTME, Shirpur</h3>
                <h3>Happy developing!</h3>
            </HomeLeft>
            <HomeRight>
                <img src='/images/HomePage.png' alt='Oh!' />
            </HomeRight>
        </Container>

        {/* About Page */}
        <About />
        </div>
    )
}

export default Home;

const Container = styled.div`
    height: 90vh;
    display: flex;
    padding: 40px;
    justify-content: center;
    align-items: center;    
    @media (max-width: 756px)
    {
        flex-direction: column;
        align-items: center;
    }
`;
const HomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    margin-right: 40px;
    color: #7e7e7e;
    img{
        width: 500px;
        fit-content: contain;
    }
    h3{
        margin-top: 20px;
    }
    @media (max-width: 756px)
    {
        margin-right: 10px;
        img{
            width: 300px;
        }
        h3{
            font-size: 0.8em;
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