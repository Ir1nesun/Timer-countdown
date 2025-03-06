import { styled } from '@mui/material/styles';
import { Button, Typography, Box } from '@mui/material';

export const TimerWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background: radial-gradient(circle, #b3e0ff 60%, #99c2ff);
    border-radius: 15px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    width: 400px;
    height: 350px;
`;

export const TimeContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    min-width: 220px;
`;

export const TimeSegment = styled(Typography)`
    font-size: 3rem;
    font-weight: bold;
    color: #333;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 55px;
    text-align: center;
`;

export const ButtonContainer = styled(Box)`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
`;

export const CustomButton = styled(Button)`
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: bold;
    margin: 8px;
    border-radius: 8px;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    min-height: 45px;
    margin-top: 30px;

    &:hover {
        transform: scale(1.05);
    }
`;
