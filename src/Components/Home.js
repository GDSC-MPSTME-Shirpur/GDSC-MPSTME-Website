import styled from 'styled-components';
import About from './About';
import "./DarkMode.css";

function Home() {
    return (
        <div>
        {/* <Content> */}
        {/* Home Page */}
        <Container id='home'>
            <HomeLeft>
                <img src='/images/HomePageLogo.png' alt='404! Element Not found.'/>
                <h3>Welcome to Google DSC at MPSTME, Shirpur</h3>
                <h3>Happy developing!</h3>
            </HomeLeft>
            <HomeRight>
                <img src='/images/HomePage.png' alt='Oh!' />
            </HomeRight>
            
        </Container>

        {/* About Page */}
        <About />

        {/* </Content> */}
        </div>
    )
}

export default Home;

// const Content = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
// `;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
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
    color: var(--home-text);
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