import React, { useState } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope} from '@fortawesome/free-solid-svg-icons';

function ContactUs()
{
    const [templateParams, setTemplateParams] = useState({
        subject: '',
        email_id: '',
        from_name: '',
        message: ''
    });

    const onInputChange = e => {
        setTemplateParams({...templateParams,[e.target.name]: e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
            emailjs.send(process.env.REACT_APP_EMAILJS_USER_ID,'template_qh0rztg', templateParams, process.env.REACT_APP_EMAILJS_API_KEY)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });
                swal({
                    title: "Sent Successfully!",
                    text: "Glad to hear from you! We will get back to you as soon possible",
                    icon: "success",
                    });
                setTemplateParams({
                    subject: '',
                    email_id: '',
                    from_name: '',
                    message: ''
                })
    };
    return(
        <div>
            <Title>
                <h1><span>Get In Touch With Us!</span></h1>
            </Title>
            <Container>
                <CollegeDetails>
                    <Map>
                        <Iframe url={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm1-aT_Au3zsRG3hCBfFg5MQ&key=${process.env.REACT_APP_MAP_API_KEY}`}
                            width="100%"
                            height="100%"
                            id="myId"
                            loading="lazy"
                            style={{ border: "0" }}
                            className="myClassname"
                                />  
                    </Map>
                    <Details>
                        <DetailsTitle>
                            <FontAwesomeIcon id='icon' icon={faAddressCard} />
                            <h4>Meet us at:</h4>
                        </DetailsTitle>
                        <p>Mukesh Patel Technolgy Park, Village: Babulde Bank of Tapi River,<br /> National Highway No: 3,<br /> Shirpur Dist, Savalade,<br/> Maharashtra: 425405</p>
                        <DetailsTitle>
                            <FontAwesomeIcon id='icon' icon={faEnvelope} />
                            <h4>Email us: </h4>
                        </DetailsTitle>
                            <p>gdscmpstme.shirpur@gmail.com</p>
                    </Details>
                </CollegeDetails>
                <form onSubmit={e => onSubmit(e)}>
                    <ContactForm>
                        <Row1>
                            <input type="text" onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" placeholder="Enter Your Name" required></input>
                            <input type="email" onChange={e => onInputChange(e)} value={templateParams.email_id} name="email_id" placeholder="Enter Your Email-id" required></input>
                        </Row1>
                        <Row2>
                            <input type="text" onChange={e => onInputChange(e)} value={templateParams.subject} name="subject" placeholder="Enter the Subject" required></input>
                        </Row2>
                        <Row3>
                            <textarea rows="8" cols="50" type="text" onChange={e => onInputChange(e)} value={templateParams.message} name="message" placeholder="Write your message..." as="textarea" required></textarea>
                        </Row3>
                        <Row1>
                            <button type="submit">Submit</button>
                        </Row1>
                    </ContactForm>
                </form>
            </Container>
        </div>
    )
}

export default ContactUs;
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4285F4;
    background-color: var(--bg);
    padding: 20px;
    padding-top: 10px;
    h1 {    
        width: 70%; 
        text-align: center; 
        border-bottom: 2px solid #4285F4; 
        line-height: 0.1em;
        margin: 10px 0 20px; 
     } 
     h1 span { 
         font-weight: 600;
         background: var(--bg); 
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

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 20px;
    background-color: var(--bg);
    @media (max-width: 756px)
     {
        flex-direction: column;
        height: fit-content;
        margin-bottom: 30px;
     }
`;

const CollegeDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 50vw;
    @media (max-width: 756px)
     {
        width: 100%;
        padding: 10px;
     }
`;

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    padding: 50px 20px;
    @media (max-width: 756px)
    {
        width: 100%;
        padding-top: 10px;
    }
    input, textarea{
        background-color: var(--bg);
        color: var(--about-para);
        ::placeholder{
            color: var(--nav-links);
        }
    }
    
`;

const Map = styled.div`
    width: 550px;
    height: 170px;
    @media (max-width: 1100px)
    {
        width: 320px;
        height: 150px;
    }
`;

const Details = styled.div`
    padding: 10px 30px;
    width: 100%;
    p{
        padding-left: 30px;
        color: var(--about-para);
    }
    @media (max-width: 756px)
    {
        padding: 10px;
    }
`;
const DetailsTitle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    display: flex;
    h4{
        color: #4285F4;
        margin-left: 5px; 
        margin-right: 5px; 
    }
    #icon{
        font-size: 1.5em;
        color: #4285F4;
    }
`;

const Row1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    input{
        width: 45%;
        padding: 5px 10px;
        margin: 5px 0px;
        border-radius: 5px;
        border: 1px solid lightgrey;
    }
    button{
        margin-top: 10px;
        padding: 5px 10px;
        cursor: pointer;
        background-color: blue;
        color: white;
        border-radius: 5px;
        font-size: 1em;
        border: 1px solid lightgrey;
    }
    @media (max-width: 756px)
    {
        flex-direction: column;
        input{
            width: 90%;
        }
    }
`;

const Row2 = styled(Row1)`
    input{
        width: 90%;    
    }
`;

const Row3 = styled(Row1)`
    height: 150px;
    margin: 5px 0px;
    textarea{
        width: 90%;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 5px 10px;
    }
`;