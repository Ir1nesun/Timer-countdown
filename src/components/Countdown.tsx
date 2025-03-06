import React, { useState, useEffect, useMemo } from 'react';
import { LinearProgress } from '@mui/material';
import {
    CountdownWrapper,
    TimeDisplay,
    InputContainer,
    StyledButton,
    StyledSlider,
    StyledTextField,
    ButtonContainer,
    ControlsContainer,
} from './Countdown.styles';

const alertSound = process.env.PUBLIC_URL + '/sound/alert.wav';

const Countdown = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setTimeLeft(minutes * 60 * 1000 + seconds * 1000);
    }, [minutes, seconds]);

    const handleStartPause = () => {
        if (timeLeft > 0) {
            setIsRunning(prev => !prev);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(0);
        setMinutes(0);
        setSeconds(0);
    };

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(prev => Math.max(0, prev - 1000));
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [isRunning, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0 && isRunning) {
            const audio = new Audio(alertSound);
            audio.play();
            setIsRunning(false);
        }
    }, [timeLeft, isRunning]);

    const progress = useMemo(() => {
        if (timeLeft === 0) return 100;
        return 100 - (timeLeft / (minutes * 60 * 1000 + seconds * 1000)) * 100;
    }, [timeLeft, minutes, seconds]);

    return (
        <CountdownWrapper>
            <ControlsContainer>
                <InputContainer>
                    <StyledTextField
                        label='Минуты'
                        type='number'
                        value={minutes}
                        onChange={e => setMinutes(Math.min(720, Math.max(0, Number(e.target.value))))}
                        disabled={isRunning}
                    />
                    <StyledTextField
                        label='Секунды'
                        type='number'
                        value={seconds}
                        onChange={e => setSeconds(Math.min(59, Math.max(0, Number(e.target.value))))}
                        disabled={isRunning}
                    />
                </InputContainer>

                <StyledSlider
                    value={minutes * 60 + seconds}
                    onChange={(_, newValue: number | number[]) => {
                        const numericValue = Array.isArray(newValue) ? newValue[0] : newValue;
                        setMinutes(Math.floor(numericValue / 60));
                        setSeconds(numericValue % 60);
                    }}
                    step={15}
                    min={0}
                    max={3600}
                    disabled={isRunning}
                />

                <TimeDisplay variant='h4'>
                    {Math.floor(timeLeft / 60000)}:{String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0')}
                </TimeDisplay>
            </ControlsContainer>

            <LinearProgress variant='determinate' value={progress} />

            <ButtonContainer>
                <StyledButton variant='contained' color='primary' onClick={handleStartPause}>
                    {isRunning ? 'Пауза' : 'Запуск'}
                </StyledButton>
                <StyledButton variant='outlined' color='secondary' onClick={handleReset}>
                    Сброс
                </StyledButton>
            </ButtonContainer>
        </CountdownWrapper>
    );
};

export default Countdown;
