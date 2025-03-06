import React from 'react';
import Timer from './components/Timer';
import Countdown from './components/Countdown';
import { TimersContainer, PageWrapper } from './assets/styles/app.styles';

const App = () => {
    return (
        <PageWrapper>
            <TimersContainer>
                <Timer />
                <Countdown />
            </TimersContainer>
        </PageWrapper>
    );
};

export default App;
