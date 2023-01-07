import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import "./DarkMode.css";

function NavBar() {

    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if(theme === "dark-theme"){
            setTheme("light-theme");
        }
        else{
            setTheme("dark-theme");
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    const [NavOpen, SetNavOpen] = useState(false);
    return (
        <Container>
            <Link to='/'>
                <Logo>
                    <img src="./images/profile_img.png" alt="Oh!" />
                    <LogoText>
                        <Heading>Google Developer Student Clubs</Heading>
                        <CollegeName>NMIMS MPSTME, Shirpur</CollegeName>
                    </LogoText>
                </Logo>
            </Link>
            <Links>
                <PcLinks>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/team">
                        <li>Team</li>
                    </Link>
                    <Link to='/technologies'>
                        <li>Technologies</li>
                    </Link>
                    <Link to="/events">
                        <li>Events</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link onClick={() => toggleTheme()}>
                        <li>
                            <Moon>🌙</Moon>
                        </li>
                    </Link>
                </PcLinks>
                <Menu>
                    <CustomMenu onClick={() =>
                        SetNavOpen(true)
                    } />
                </Menu>
            </Links>
            <MobileNav show={NavOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() =>
                        SetNavOpen(false)
                    } />
                </CloseWrapper>
                <Link to="/" onClick={() =>
                    SetNavOpen(false)
                }>
                    <li>Home</li>
                </Link>
                <Link to="/team" onClick={() =>
                    SetNavOpen(false)
                }>
                    <li>Team</li>
                </Link>
                <Link to='/technologies' onClick={() =>
                    SetNavOpen(false)
                }>
                    <li>technologies</li>
                </Link>
                <Link to="/events" onClick={() =>
                    SetNavOpen(false)
                }>
                    <li>Events</li>
                </Link>
                <Link to="/contact" onClick={() =>
                    SetNavOpen(false)
                }>
                    <li>Contact</li>
                </Link>
                <Link onClick={() =>
                    toggleTheme()
                }>
                    <li>
                        <Moon>🌙</Moon>
                    </li>
                </Link>
            </MobileNav>
        </Container>
    )
}

export default NavBar;

const Container = styled.div`
    z-index: 1;
    color: var(--nav-links);
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    top: 0;
    position: sticky;
    height: 70px;
    align-items: center;
    padding: 0px 30px;
    background-color: var(--bg);
    box-shadow: 0 0 12px 0 var(--nav-shadow);
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    color: var(--nav-links);
    cursor: pointer;
    img{
        height: 60px;
    }
`;
const LogoText = styled(Logo)`
    font-weight: 600;
    flex-direction: column;
    justify-content: center;
`;
const Heading = styled.div`
    font-size: 18px;
    @media (max-width: 824px)
    {
        font-size: 14px;
    }
`;
const CollegeName = styled.div`
    font-size: 14px;
    @media (max-width: 824px)
    {
        font-size: 12px;
    }
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    list-style: none;
    li{
        padding: 0.5rem;
        font-weight: 600;
        color: var(--nav-links);
    }
    li:hover,
    li:focus 
    {
        border-bottom: 1px solid var(--nav-uline);
        transition: all 0.2s ease-in-out;
        padding: 0.5rem;
        background-color: var(--nav-hover);
        color: var(--about-para);
    }
    
`;
const PcLinks = styled(Links)`
    li{
        cursor: pointer;
    }
    @media (max-width: 824px)
    {
        display: none;
    }
    ion-icons{
        color: blue;
    }
`;
const Menu = styled.div`
    @media (min-width: 824px)
    {
        display: none;
    }
`;
const MobileNav = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    display: flex;
    flex-direction: column;
    list-style: none;
    text-transform: uppercase;
    text-align: start;
    background-color: var(--bg);
    padding: 20px;
    transition: transform 0.2s ease-in;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        font-weight: 600;
        color: var(--nav-links);
    }
    @media (min-width: 824px)
    {
        display: none;
    }
`;
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Moon = styled.div`
    font-size: 24px;
`