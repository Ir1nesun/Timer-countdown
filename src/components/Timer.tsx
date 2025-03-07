import React, { useState, useEffect, memo } from 'react';
import { TimerWrapper, TimeContainer, CustomButton, TimeSegment, ButtonContainer } from './Timer.styles';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);

            return () => clearInterval(interval);
        }
    }, [isRunning]);

    const handleStartPause = () => setIsRunning(prev => !prev);
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = () => {
        const minutes = Math.floor(time / 60000);
        const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
        const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <TimerWrapper>
            <TimeContainer style={{ display: 'flex', gap: '0px' }}>
                {formatTime()
                    .split('')
                    .map((char, index) => (
                        <TimeSegment key={index} style={{ letterSpacing: '-8px', marginRight: '-15px' }}>
                            {char}
                        </TimeSegment>
                    ))}
            </TimeContainer>

            <ButtonContainer>
                <CustomButton variant='contained' color='primary' onClick={handleStartPause}>
                    {isRunning ? 'Пауза' : 'Старт'}
                </CustomButton>
                <CustomButton variant='outlined' color='secondary' onClick={reset}>
                    Сброс
                </CustomButton>
            </ButtonContainer>
        </TimerWrapper>
    );
};

export default memo(Timer);
