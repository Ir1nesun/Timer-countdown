import styled, { keyframes } from 'styled-components';
import { Box } from '@mui/material';

export const SApp = styled.div`
    text-align: center;
`;

export const SHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${spin} infinite 20s linear;
    }
`;

export const SLink = styled.a`
    color: #61dafb;
`;

export const TimersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const PageWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(180deg, #b3e0ff, #ffffff);
    transition: background 0.5s ease-in-out;
`;
