import styled, {css} from 'styled-components';

export const MenuIcon = styled.i`
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  color: ${({color}) => color};
`

export const SearchBar = styled.input`
  padding: 5px;
  background-color: transparent;
  color: black;
  outline: none;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: black;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
      color: black;
  }
`;