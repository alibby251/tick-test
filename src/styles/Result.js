import styled from 'styled-components';

const Result = styled.div`
    background-color: #333333;
    border-radius: 8px;
    display: inline-flex;
    margin-bottom: 8px;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

Result.Preview = styled.img`
    border-radius: 8px;
    filter: sepia(20%) contrast(100%);
    opacity: 0.5;
    transition-duration: 200ms;
    transition-property: opacity, filter;
    transition-timing-function: linear;
    width: 100%;
    &:hover {
      filter: sepia(20%) contrast(80%);
      opacity: 1;
    }
`;

Result.Type = styled.img`
    position: absolute;
    right: 8px;
    top: 8px;
    width: 24px;
    z-index: 1;
`;

Result.Title = styled.p`
    color: #333333;
    font-size: 1rem;
    padding: 24px;
`;

export default Result;