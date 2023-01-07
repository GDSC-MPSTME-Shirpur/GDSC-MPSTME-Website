import React from 'react'
import styled from 'styled-components';

function About() {
   return (
      <Container id='about'>
            <Body>
               <Heading>
                  <h4>About Google Developer Student Club</h4>
               </Heading>
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
               <ButtonTab>
                  <Button><a href='https://gdsc.community.dev/accounts/login/?next=/mukesh-patel-school-of-technology-management-and-engineering-shirpur/'>Join us</a></Button>
               </ButtonTab>
            </Body>
         <Picture>
               <img src='/images/about1.gif' alt='404, Object not found' />
         </Picture>
      </Container>
   )
}

export default About

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   padding: 0px 40px;
   background-color: var(--bg);
   @media (max-width: 993px)
    {
         flex-direction: column;
         height: fit-content;
         padding: 0px 10px !important;
    }
`;

const Heading = styled.div`
   h4{
      font-size: x-large;
      padding: 10px;
      color: blue;
   }
`;

const Body = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 50vw;
   margin: 20px;
   color: var(--about-para);
   p{
      padding: 20px;
   }
   @media (max-width: 824px)
    {
         margin: 0;
         width: 100%;
         p{
            padding: 10px !important;
         }
    }
`;

const Part = styled.div`
   margin-top: 5px;
   margin-left: 25px;
   @media (max-width: 824px)
    {
         margin: 10px;
    }
`

const Picture = styled.div`
   width: 50vw;
   display: flex;
   align-items: center;
   justify-content: center;
    img{
        width: 450px;
        fit-content: contain;
    }
    @media (max-width: 824px)
    {
        img{
            width: 250px;
        }
    }
`;
const ButtonTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    Button:hover{
      background-color: lightblue;
      box-shadow: 0 3px 6px rgb(0 110 255 / 40%);
      a{
         color: black;
      }
    }
`;

const Button = styled.button`
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    font-weight: 800;
    background-color: blue;
    cursor: pointer;
    border: 0px;
    a{
       text-decoration: none;
       color: white;
    }
`;

