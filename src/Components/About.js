import React from 'react'
import styled from 'styled-components';

function About() {
   return (
      <Container>
            <Heading>
               <h3>About Google Developer Student Club</h3>
            </Heading>

            <Body>
            <br/> 
                    <p>Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. Opportunities DSCs provide students with :
                    <ul>

                     <Part>
                        <li>Gain relevant industry experience by solving problems for local organizations with technology based solutions.</li>
                    <li>Showcase their prototypes and solutions to their local community and industry.</li>
                    <li>Grow their knowledge on developer technologies and more through peer to peer</li>
                    <li>Getting inspiration to become world-class developers and changemakers.</li>
                     </Part>

                    
                    </ul>
                    </p>
         </Body>
         <Picture>
            <a>
               <img src='/images/about1.gif' alt='image not found' />
            </a>
         </Picture>
      </Container>
   )
}

export default About

const Container = styled.div`
margin-left: 50px;
min-height: 450px;
width: 50vx;
`;
const Heading = styled.div`
margin-top: 50px;
font-size: x-large;
//border: 1px solid black;
color: #34A853;

`;

const Body = styled.div`
// display: flex;
align- items: center;

font-size: medium;
font-weight: 500;
margin-right:600px;
//border: 1px solid black;
`;

const Part = styled.div`
margin: 30px;
`

const Picture = styled.div`
    height: 100%;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 300px;
        fit-content: contain;
    }
    @media (max-width: 606px)
    {
        width: 100vw;
        img{
            width: 250px;
        }
    }
   // border: 1px solid black;
`;

