import styled from 'styled-components';

export const MenuIcon = styled.i`
  cursor: pointer;
  display: ${({isSidebarOpen}) => isSidebarOpen === true ? "none" : "block"};
  color: ${({insideComp}) => insideComp === "MediaViewer" && "white"};
`

export const SearchBar = styled.input`
  width: 100px;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  color: black;
  border: none;
  border-bottom: 2px solid;
  outline: none;

  :focus {
    border-color: #1a73e8;
  }

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