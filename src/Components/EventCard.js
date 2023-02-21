import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function EventCard({event}) 
{
    return (
        <Container background={event.bkgclr} isLeft={event.isLeft} >
            <Image>
                <img src={event.img} alt={event.name}></img>
            </Image>
            <EventInfo>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                {
                    event.Date
                    &&
                    <>
                    { event.location && <p><strong>Location:</strong> {event.location}</p>}
                    <p><strong>Date:</strong> {event.Date}</p>
                    <p><strong>Time:</strong> {event.Time}</p>
                    </>
                }
                <Buttons>
                    <a href={event.link}><button>{event.SiteName} <FontAwesomeIcon icon={faExternalLinkAlt} /></button></a>
                    {
                        event.bufferBtnName
                        &&
                        <a href={event.bufferBtnLink}><button>{event.bufferBtnName} <FontAwesomeIcon icon={faExternalLinkAlt} /></button></a>
                    }
                </Buttons>
            </EventInfo>
        </Container>
    );
}

export default EventCard;

const Container = styled.div`
    background-color: ${props => props.background? `var(--bg)`:`var(--bg)`};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    flex-direction: ${props => props.isLeft? `row`:`row-reverse`};
    @media (max-width: 756px)
    {
        min-height: fit-content;
        height: 100%;
        width: 100vw;
        flex-direction: column;
        align-items: center;
        padding-bottom: 5px;
    }
    
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    margin: 0px 10px;
    img{
        max-height: 60vh;
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
const EventInfo = styled.div`
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
        color: var(--about-para);
        font-weight: 500;
        margin-bottom: 5px;
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