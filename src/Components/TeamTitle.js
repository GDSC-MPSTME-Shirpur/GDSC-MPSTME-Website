import React from 'react';
import styled from 'styled-components';

function TeamTitle({TeamName, color})
{
    return(
        <Container>
            <Title color={color}>
                <h1><span>{TeamName}</span></h1>
            </Title>
        </Container>
    );
}

export default TeamTitle;
const Container = styled.div`       
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    // color: rgb(62, 238, 62);
    color: ${props => props.color? `${props.color}`:`blue`};
    /* margin-top: 10px; */
    padding: 10px;
    padding-top: 20px;
    background-color: var(--bg);
    h1 {    
        width: 70%; 
        text-align: center; 
        // border-bottom: 2px solid #000; 
        border-bottom: 2px solid ${props => props.color? `${props.color}`:`blue`}; 
        line-height: 0.1em;
        margin: 10px 0 20px; 
     } 
     h1 span { 
         background:var(--bg); 
        //  background: rgb(234, 237, 237); 
         padding:0 10px; 
     }
     @media (max-width: 756px)
     {
        h1{
            width: 90%;
            font-size: 1.3em;
        }
     }
`;