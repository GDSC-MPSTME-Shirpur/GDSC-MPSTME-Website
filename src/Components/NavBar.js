import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function NavBar() {
    const [NavOpen, SetNavOpen] = useState(false);
    return (
        <Container>
            <Logo>
                <a href="#">
                    <img src="./images/profile_img.png" alt="Oh!" />
                </a>
                <a href="#">
                    <LogoText>
                        <Heading>Google Developers Student Club</Heading>
                        <CollegeName>MPSTME, Shirpur</CollegeName>
                    </LogoText>
                </a>
            </Logo>
            <Links>
                <PcLinks>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
                </PcLinks>
                <Menu>
                    <CustomMenu onClick = {() => 
                        SetNavOpen(true)
                    }/>
                </Menu>
            </Links>
            <MobileNav show = { NavOpen }>
                <CloseWrapper>
                    <CustomClose onClick = {() => 
                        SetNavOpen(false)
                    }/>
                </CloseWrapper>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </MobileNav>
        </Container>
    )
}

export default NavBar;

const Container = styled.div`
    z-index: 1;
    display: flex;
    font-size: 15px;
    width: 100%;
    justify-content: space-between;
    position: sticky;
    height: 10vh;
    align-items: center;
    padding: 0px 30px;
    background-color: white;
    box-shadow: 0 0 12px 0 #9b9595;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    color: #5f6368;
    cursor: pointer;
    img{
        height: 10vh;
    }
`;
const LogoText = styled(Logo)`
    font-weight: 600;
    flex-direction: column;
    justify-content: center;
`;
const Heading = styled.div`
    font-size: 18px;
    @media (max-width: 756px)
    {
        font-size: 15px;
    }
`;
const CollegeName = styled.div`
    font-size: 14px;
    @media (max-width: 756px)
    {
        font-size: 12px;
    }
`;
const Links =styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    list-style: none;
    li{
        padding: 0px 10px;
        font-weight: 600;
        a{
            color: #5f6368;
        }
    }
`;
const PcLinks = styled(Links)`
    @media (max-width: 756px)
    {
        display: none;
    }
`;
const Menu = styled.div`
    @media (min-width: 756px)
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
    background-color: white;
    padding: 20px;
    transition: transform 0.2s ease-in;
    transform: ${props => props.show?'translateX(0)':'translateX(100%)'};
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
            color: #5f6368;
        }
    }
    @media (min-width: 756px)
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