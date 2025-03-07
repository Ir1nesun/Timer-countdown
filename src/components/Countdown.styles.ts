import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Slider, Typography } from '@mui/material';
import { LinearProgress } from '@mui/material';

export const CountdownWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background: radial-gradient(circle, #ffe6b3 60%, #ffd699);
    border-radius: 15px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    width: 400px;
    height: 350px;
`;

export const ControlsContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
    gap: 15px;
`;

export const TimeDisplay = styled(Typography)`
    font-size: 3rem;
    font-weight: bold;
    color: #333;
    font-family: 'Roboto Mono', monospace;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    min-width: 250px;
`;

export const InputContainer = styled(Box)`
    display: flex;
    gap: 10px;
`;

export const StyledTextField = styled(TextField)`
    width: 80px;
    text-align: center;

    & .MuiInputBase-input {
        text-align: center;
        padding-right: 0;
        background: transparent;
        box-shadow: none;
    }
`;

export const StyledSlider = styled(Slider)`
    width: 250px;
    margin-top: 10px;
`;

export const ButtonContainer = styled(Box)`
    display: flex;
    gap: 15px;
    margin-top: auto;
`;

export const StyledButton = styled(Button)`
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    margin-top: 35px;

    &:hover {
        transform: scale(1.05);
    }
`;

export const StyledProgress = styled(LinearProgress)`
    height: 10px;
    border-radius: 5px;
    width: 250px;
    background-color: #1976d2;
    transition: all 0.3s ease-in-out;
`;
