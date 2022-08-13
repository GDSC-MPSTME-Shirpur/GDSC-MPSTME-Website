import React from 'react';
import styled from 'styled-components';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import ProfileCard from './ProfileCard';

const SubCore = ({Team}) => {

    const scrollRef = React.useRef(null)

    const scroll = (direction) => {
      const { current } = scrollRef;
      if( direction === 'left') {
        current.scrollLeft -= 300;
      }
      else{
        current.scrollLeft += 300;
      }
    }

    return (
        <SuCore>
            <Members className='app__gallery-images_container' ref={scrollRef}>
                { 
                    Team.map((Person, index) => (
                        index !== 0
                        &&
                        <div className="app__gallery-images_card flex__center" >
                            <ProfileCard Person = {Person} key = {index} />
                        </div>
                    ))
                }
            </Members>
            <div className="app__gallery-images_arrow">
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left') } /> 
                <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
            </div>
        </SuCore>
    )
}

export default SubCore;

const SuCore = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .app__gallery-images_container::-webkit-scrollbar{
        display: none;
    }
    .app__gallery-images_arrow{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        position: absolute;
    }
    
    .gallery__arrow-icon{
        background-color: white;
        color: #5f6368;
        border: 1px solid lightgrey;
        border-radius: 5px;
        box-shadow: 0 0 12px 0 #9b9595;
        font-size: 2rem;
        cursor: pointer;
        border-radius: 5px;
    }

    .gallery__arrow-icon:hover,
    .gallery__arrow-icon:focus 
    {
        transition: all 0.2s ease-in-out;
        background-color: #EAECEE;
        font-size: 2.5rem; 
        color: black;
    }

`;

const Members = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0 2rem;
    
    .app__gallery-images_card{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`;