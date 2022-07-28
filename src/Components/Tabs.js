import React, { useState } from 'react';
import styled from 'styled-components';
import Team from './Team';
import Team_new from './Team_new';
import "./tabs.css";

export default function Tabs() {

    const [state, setState] = useState(2);
    const action = (index) => {
        setState(index)
    }

    return (
        <div className='box'>
            <div className='tabs'>
                <div onClick={() => action(1)} className={`${state === 1 ? 'tab active-tab' : 'tab'}`}>
                    2021
                </div>
                <div onClick={() => action(2)} className={`${state === 2 ? 'tab active-tab' : 'tab'}`}>
                    2022
                </div>
            </div>

            {/* contents */}
            <div className='contents'>
                <div className={`${state === 1 ? "content active-content" : "content"}`}>
                    <Team />
                </div>
                <div className={`${state === 2 ? "content active-content" : "content"}`}>
                    <Team_new />
                </div>
            </div>
        </div>
    )
};