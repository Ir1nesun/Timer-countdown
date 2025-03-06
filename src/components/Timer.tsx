import React, { useState, useEffect, useCallback, memo } from 'react';
import { TimerWrapper, TimeContainer, CustomButton, TimeSegment, ButtonContainer } from './Timer.styles';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleStartPause = useCallback(() => {
        setIsRunning(prev => !prev);
    }, []);

    const reset = useCallback(() => {
        setIsRunning(false);
        setTime(0);
    }, []);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);

            return () => clearInterval(interval);
        }
    }, [isRunning]);

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return (
        <TimerWrapper>
            <TimeContainer>
                <TimeSegment>{minutes}</TimeSegment>
                <TimeSegment>:</TimeSegment>
                <TimeSegment>{String(seconds).padStart(2, '0')}</TimeSegment>
                <TimeSegment>:</TimeSegment>
                <TimeSegment>{String(milliseconds).padStart(2, '0')}</TimeSegment>
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
