import React, { useState } from 'react';
import styled from 'styled-components';
import Team from './2021_Team';
import Team22 from './2022_Team';

export default function Tabs() {

    const [state, setState] = useState(2022);
    const year_2 = 2022;
    const year_1 = 2021;
    return (
        <Box>
            <TwoTabs>
                <Tab onClick={() => setState(2022)} state={state} year={year_2}>
                    {year_2}
                </Tab>
                <Tab onClick={() => setState(2021)} state={state} year={year_1}>
                    {year_1}
                </Tab>
            </TwoTabs>

            {/* contents */}
            <div className='contents'>
                {
                    (state === 2022 ? (<Team22 /> ):( <Team />))
                }
            </div>
        </Box >
    )
};

const Box = styled.div`
    width: 10 0px;
    margin: auto;
    margin-top: 50px;
`
const TwoTabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Tab = styled.div`
    padding: 10px;
    text-align: center;
    border-top: none;
    line-height: 1em;
    cursor: pointer;
    position: relative;
    width: 15%;
    font-size: 25px;
    margin-bottom: 20px;
    
    border-bottom: ${props => props.state === props.year ? `2px solid #4285F4` : `none`};
    
    width: ${props => props.state === props.year ? `15%` : `none`};
`
