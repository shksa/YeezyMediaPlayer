import styled from 'styled-components';

export const MenuIcon = styled.i`
  cursor: pointer;
  display: ${({isSidebarOpen}) => isSidebarOpen === true ? "none" : "block"};
  color: ${({insideComp}) => insideComp === "MediaViewer" && "white"}
`