import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  ${({ theme: { color, spacing } }) => css`
    animation: ${spin} 1.1s infinite linear;
    border-radius: 50%;
    border: 4px solid rgb(0,0,0,0.5);
    border-left-color: #333333;
    height: 20px;
    margin-right: 12px;
    position: relative;
    transform: translateZ(0);
    width: 20px;
  `}
`;

export default Spinner;