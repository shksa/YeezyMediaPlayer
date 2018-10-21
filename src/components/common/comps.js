import styled from 'styled-components';

export const MediaListRevealer = styled.img`
  cursor: pointer;
  display: ${({isSidebarOpen}) => isSidebarOpen === true ? "none" : "block"};


  ${({inComp}) => (inComp === "Sidebar" 
    ? ``
    : "")
  };
`