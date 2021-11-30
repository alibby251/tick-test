import styled, { css } from 'styled-components';

const states = {
  entering: css`
    transform: translate3d(-50%, -24px, 0);
  `,
  entered: css`
    transform: translate3d(-50%, -24px, 0);
  `,
  exiting: css`
    transform: translate3d(-50%, 100%, 0);
    transition-delay: 1s;
  `,
  exited: css`
    transform: translate3d(-50%, 100%, 0);
  `
};

const Snackbar = styled.div`
  ${(state) => css`
    align-items: center;
    background-color: rgb(255,255,255,0.6);
    border-radius: 4px;
    border: 1px solid rgb(29,42,57);
    bottom: 0;
    color: rgb(29, 42, 57);
    display: flex;
    justify-content: center;
    left: 50%;
    padding-bottom: 16px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    position: fixed;
    transition: transform 1.5ms;
    z-index: 2;
    font-weight: 700;
    ${state && states[state]}
  `}
`;

export default Snackbar;