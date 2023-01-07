import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer()
{
    return(
        <Container>
            <FooterImg>
                <img src="./images/Footer Logo.png" alt="404! Element Not Found" />
                <p>&copy;{(new Date().getFullYear())}| All Rights Reserved</p>
                <p>Engineered By Technical Team.</p>
                <p>Powered By Google</p>
            </FooterImg>
            <QuickLinks>
                <h2>Quick Links:</h2>
                <ul>
                    <li><a href="https://gdsc.community.dev/chapters/">Chapters</a></li>
                    <li><a href="https://gdsc.community.dev/events/#/list">Upcoming events</a></li>
                    <li><a href="https://developers.google.com/community/gdsc">More About DSC</a></li>
                    <li><a href="https://gdsc.community.dev/participation-terms/">Participation Terms</a></li>
                    <li><a href="https://policies.google.com/privacy">Privacy</a></li>
                    <li><a href="https://policies.google.com/terms">Terms</a></li>
                </ul>
            </QuickLinks>
            <Social>    
                <h2>Connect with us At:</h2>
                <Icons>
                    <a href="https://www.instagram.com/gdsc.mpstmeshirpur/" id="insta-a"><FontAwesomeIcon id="insta" icon={faInstagram} /></a>
                    <a href="https://discord.gg/b3JJqbqCq8" id="discord-a"><FontAwesomeIcon id="discord" icon={faDiscord} /></a>
                    <a href="https://www.linkedin.com/company/gdsc-mpstme-shirpur/" id="linkedin-a"><FontAwesomeIcon id="linkedin" icon={faLinkedin} /></a>
                    <a href="https://github.com/GDSC-MPSTME-Shirpur" id="github-a"><FontAwesomeIcon id="github" icon={faGithub} /></a>
                </Icons>
            </Social>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    display: flex;
    /* padding removed due to dark mode
    padding: 0 50px 10px 50px; */
    justify-content: center;
    border-top: 1px solid lightgrey;
    @media (max-width: 756px)
     {
        flex-direction: column-reverse;
        margin-bottom: 70px;
        padding: 0 20px 10px 20px;
     }
`;

const FooterImg = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--nav-links);
    font-size: 0.8em;
    font-weight: 600;
    background-color : var(--bg);
    img{
        margin-bottom: -20px;
        width: 100%;
        max-width: 250px;
        fit-content: contain;
    }
    
    @media (max-width: 756px)
     {
        width: 100%;
     }
`;

const QuickLinks = styled(FooterImg)`
    width: 25vw;
    align-items: flex-start;
    a{
        text-decoration: none;
        color: var(--nav-links);   
    }
    a:hover{
        color: #4285F4;
    }
    ul{
        margin-left: 20px;
    }
    @media (max-width: 756px)
     {
        margin-top: 20px;
        width: 100%;
     }
`;

const Social = styled(FooterImg)`
    width: 25vw;
    @media (max-width: 756px)
     {
        margin-top: 20px;
        width: 100%;
     }
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    a{
        cursor: pointer;
        padding: 3px 5px;
        margin: 3px;
        border-radius: 3px;
        font-size: 1.8em;
    }
    a:hover{
        font-size: 1.5em;
    }
    #discord-a{
        border: 1px solid blue;
    }
    #insta-a{
        border: 1px solid rgb(230, 99, 121);
    }
    #github-a{
        border: 1px solid grey;
    }
    #linkedin-a{
        border: 1px solid darkblue;
    }
    #insta{
        color: rgb(230, 99, 121);
    }
    #discord{
        color: blue;
    }
    #github{
        color: var(--about-para);
    }
    #linkedin{
        color: darkblue;
    }
    
`;