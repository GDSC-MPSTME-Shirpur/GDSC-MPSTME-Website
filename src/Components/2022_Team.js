import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import TeamTitle from './TeamTitle';
import {GDSC_Lead, Event_Team, Marketing_Team, Creative_Team, Tech_Team, PR_Team} from './2022_Team_Details';

const Departments = [
    'GDSC Lead',
    'Event Management Team',
    'Marketing Team',
    'Technical Team',
    'Creative Team',
    'Public Relations Team'
];

function Team_new() {
    return (
        <Container>
            {
                Departments.map((item, i) =>
                (
                    <div key={i}>
                        <TeamTitle TeamName={item} color="#4285F4" />
                        <TeamContainer>
                        </TeamContainer>
                    </div>
                ))
            }
        </Container>
    );
}

export default Team_new;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
`;
