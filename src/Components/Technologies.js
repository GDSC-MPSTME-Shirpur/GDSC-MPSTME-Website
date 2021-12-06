import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import TechCard from './TechCard';
import technologies from './Techinfo';

function Technologies() {
    return (
        <Container>
            <Title>
                <h2>Technologies We Love < FontAwesomeIcon id="heart" icon={faHeart} /></h2>
                <h4>Opportunities for you to learn & access technical content.</h4>
            </Title>
            {
                technologies.map(item => (
                    <TechCard Tech={item} />
                ))
            }
        </Container>
    );
}

export default Technologies;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin: 2em 0 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #heart{
        color: red;
    }
    h2{
        color: #1b2733;
        font-family: "Google Sans",sans-serif;
        text-align: center;
        font-weight: 700;
    }
    h4{
        text-align: center;
        color: #5f6368;
        font-weight: 500;
    }
`;