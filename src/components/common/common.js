import styled from 'styled-components';

export const MenuIcon = styled.img`
  cursor: pointer;
  display: ${({isSidebarOpen}) => isSidebarOpen === true ? "none" : "block"};
`