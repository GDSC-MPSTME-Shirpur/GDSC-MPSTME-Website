import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import TeamTitle from './TeamTitle';
import TeamMembers from './TeamDetails';

const Departments = [
    'GDSC Lead',
    'Event Management Team',
    'Marketing Team',
    'Technical Team',
    'Creative Team',
    'Public Relations Team'
];

let R1=0, R2=1,R3=4; 
function IncrementRow()
{
    R1+=6;
    R3+=6;
    R2+=6;
}

function Row1()
{
    return(
    <Row>
    {  
        TeamMembers.map((Person,index) => (
            index==R1
            &&
            <ProfileCard Person={Person} />
        ))
    }
    </Row>
    )
}

function Row2()
{
    return(
    <Row>
    {  
        TeamMembers.map((Person,index) => (
            (index>=R2 && index<=(R2 + 2))
            &&
            <>
            <ProfileCard Person={Person} />
            </>
        ))
    }
    </Row>
    )   
}
function Row3()
{
    return(
    <Row>
    {  
        TeamMembers.map((Person,index) => (
            (index>=R3 && index<=(R3+1 ))
            &&
            <>
            <ProfileCard Person={Person} />
            </>
        ))
    }
    </Row>
    )   
}

function Team()
{
    R1=0;
    R2=1; 
    R3=4;
    return(
        <Container>
            {
                Departments.map((item,i) =>
                (
                    <>
                    <TeamTitle TeamName={item} />
                    <TeamContainer>
                        {
                            Row1()
                        }
                        {
                            Row2()
                        }
                        {
                            Row3()
                        }
                    </TeamContainer>
                    { IncrementRow() }
                    </>
                ))
            }
        </Container>
    );
}

export default Team;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: rgb(234, 237, 237);
    background-color: white;
`;
const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;
const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 756px)
    {
        flex-direction: column;
    }
`;

