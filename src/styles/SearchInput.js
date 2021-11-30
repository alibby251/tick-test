import styled from 'styled-components';
import icon from '../media/icon-search.svg';

const SearchInput = styled.input`
    background-color: #ffffff;
    background-image: url(${icon});
    background-position: center right 12px;
    background-repeat: no-repeat;
    background-size: 24px;
    border-radius: 4px;
    border: 1px solid rgb(29, 42, 57);
    flex: 1 0 calc(100% - 16px);
    font-size: 1.2rem;
    font-weight: 500;
    height: 25px;
    margin: 8px;
    min-width: 0;
    outline: none;
    padding: 10px 24px 10px 12px;
    transition: border 100ms linear;
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    &:focus {
      box-shadow: 0 0 0 2px #d4d4d4,
        0 0 0 2px rgb(0,0,0,0.4);
    }
    
    &::placeholder {
      color: #c2c2c2;
      transition: opacity 100ms linear;
    }

    &:focus::placeholder {
      opacity: 0;
    }
`;

export default SearchInput;