import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function TechCard({Tech}) 
{
    return (
        <Container background={Tech.bkgclr} isLeft={Tech.isLeft} >
            <Image>
                {console.log(Tech.img)}
                <img src={Tech.img} alt={Tech.name}></img>
            </Image>
            <TechInfo>
                <h2>{Tech.name}</h2>
                <p>{Tech.content}</p>
                <Buttons>
                    <a href={Tech.link}><button>{Tech.SiteName} <FontAwesomeIcon icon={faExternalLinkAlt} /></button></a>
                    {
                        Tech.bufferBtnName
                        &&
                        <a href={Tech.bufferBtnLink}><button>{Tech.bufferBtnName} <FontAwesomeIcon icon={faExternalLinkAlt} /></button></a>
                    }
                </Buttons>
            </TechInfo>
        </Container>
    );
}

export default TechCard;

const Container = styled.div`
    background-color: ${props => props.background? `var(--bg)`:`var(--bg)`};
    height: 70vh;
    min-height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    flex-direction: ${props => props.isLeft? `row`:`row-reverse`};
    @media (max-width: 756px)
    {
        height: 100%;
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }
    
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    margin: 0px 10px;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    @media (max-width: 756px)
    {  
        width: 100%;
        flex-direction: column;
        align-items: center;
        img{
            width: 100%;
            object-fit: contain;
        }
    }
`;  
const TechInfo = styled.div`
    display: flex;  
    flex-direction: column;
    font-family: "Google Sans",sans-serif;
    padding: 20px;
    width: 40%;
    margin: 0px 10px;
    h2
    {
        margin: 5px 0px;
        color: var(--about-para);
    }
    p
    {
        color: #5f6368;
        font-weight: 500;
    }
    button
    {
        color: white;
        cursor: pointer;
        font-weight: 500;
        background-color: #4285F4;
        border: 1px solid #4285F4;
        margin: 7px 10px 7px 0px;
        padding: 5px 10px;
        font-size: 1em;
        border-radius: 5px;
    }
    button:hover
    {
        background-color: lightblue;
        border: 1px solid lightblue;
        box-shadow: 0 3px 6px rgb(0 110 255 / 40%);
           color: black;
    }
    @media (max-width: 756px)
    {
        width: 100vw;
    }
`;
const Buttons = styled.div`
    display: flex;
`;