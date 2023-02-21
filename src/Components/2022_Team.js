import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import TeamTitle from './TeamTitle';
import {GDSC_Lead, Event_Team, Marketing_Team, Creative_Team, Tech_Team, PR_Team} from './2022_Team_Details';
import SubCore from './SubCore';

const Departments = [
    'GDSC Lead',
    'Event Management Team',
    'Marketing Team',
    'Technical Team',
    'Creative Team',
    'Public Relations Team'
];

const Team22 = () => {

    return (
        <Container>

            {/* GDSC Lead */}
            <TeamTitle TeamName={Departments[0]} color="#4285F4" />  
            <LeadContainer>
                <ProfileCard Person = {GDSC_Lead[0]} />
            </LeadContainer>
           
            {/* Technical Team */}
            <TeamTitle TeamName={Departments[3]} color="#4285F4" /> 
            <LeadContainer>
                <ProfileCard Person = {Tech_Team[0]} />
            </LeadContainer>
            <SubCore Team = {Tech_Team} />
            
            {/* Marketing Team */}
            <TeamTitle TeamName={Departments[2]} color="#4285F4" />
            <LeadContainer>
                <ProfileCard Person = {Marketing_Team[0]} />
            </LeadContainer>
            <SubCore Team = {Marketing_Team} />

            {/* Creative Team */}
            <TeamTitle TeamName={Departments[4]} color="#4285F4" />
            <LeadContainer>
                <ProfileCard Person = {Creative_Team[0]} />
            </LeadContainer>
            <SubCore Team = {Creative_Team} />

            {/* PR Team */}
            <TeamTitle TeamName={Departments[5]} color="#4285F4" />
            <LeadContainer>
                <ProfileCard Person = {PR_Team[0]} />
            </LeadContainer>
            <SubCore Team = {PR_Team} />

            {/* Event Team */}
            <TeamTitle TeamName={Departments[1]} color="#4285F4" />  
            <LeadContainer>
                <ProfileCard Person = {Event_Team[0]} />
            </LeadContainer>
            <SubCore Team = {Event_Team} />

        </Container>
    );
}

export default Team22;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--bg);
    padding-bottom: 20px;
`;

const LeadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
`;