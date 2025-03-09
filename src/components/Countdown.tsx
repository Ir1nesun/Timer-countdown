import React, { useState, useEffect } from 'react';
import {
    CountdownWrapper,
    TimeDisplay,
    InputContainer,
    StyledButton,
    StyledSlider,
    StyledTextField,
    ButtonContainer,
    ControlsContainer,
    StyledProgress,
} from './Countdown.styles';

const alertSound = `${process.env.PUBLIC_URL}/sound/alert.wav`;

const Countdown = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            setTimeLeft((minutes * 60 + seconds) * 1000);
        }
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

    const handleSliderChange = (newValue: number | number[]) => {
        const numericValue = Array.isArray(newValue) ? newValue[0] : newValue;
        setMinutes(Math.floor(numericValue / 60));
        setSeconds(numericValue % 60);
    };

    useEffect(() => {
        if (!isRunning) return;

        const timerId = setInterval(() => {
            setTimeLeft(prev => (prev <= 1000 ? 0 : prev - 1000));
        }, 1000);

        return () => clearInterval(timerId);
    }, [isRunning]);

    useEffect(() => {
        if (!isRunning || timeLeft > 0) return;

        new Audio(alertSound).play();
        handleReset();
    }, [isRunning, timeLeft]);

    const handleTimeChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<React.SetStateAction<number>>,
        maxValue: number,
    ) => {
        const numericValue = Math.min(
            maxValue,
            Math.max(0, parseInt(e.target.value.trim().replace(/\D/g, '') || '0', 10)),
        );
        setState(numericValue);
    };

    const totalTime = (minutes * 60 + seconds) * 1000;
    const progress = totalTime > 0 ? (timeLeft / totalTime) * 100 : 0;
    const progressColor = timeLeft > 0 ? `hsl(${(timeLeft / totalTime) * 220}, 100%, 50%)` : `hsl(0, 100%, 50%)`;
    const formatTime = () =>
        `${Math.floor(timeLeft / 60000)}:${String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0')}`;

    return (
        <CountdownWrapper>
            <ControlsContainer>
                <InputContainer>
                    <StyledTextField
                        label='Минуты'
                        type='number'
                        value={minutes || ''}
                        onChange={e => handleTimeChange(e as React.ChangeEvent<HTMLInputElement>, setMinutes, 720)}
                        disabled={isRunning}
                    />
                    <StyledTextField
                        label='Секунды'
                        type='number'
                        value={seconds || ''}
                        onChange={e => handleTimeChange(e as React.ChangeEvent<HTMLInputElement>, setSeconds, 59)}
                        disabled={isRunning}
                    />
                </InputContainer>

                <StyledSlider
                    value={minutes * 60 + seconds}
                    onChange={(_, newValue) => handleSliderChange(newValue)}
                    step={15}
                    min={0}
                    max={720 * 60}
                    disabled={isRunning}
                />

                <TimeDisplay variant='h4'>{formatTime()}</TimeDisplay>
            </ControlsContainer>

            <StyledProgress variant='determinate' value={progress} sx={{ backgroundColor: progressColor }} />

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
