import styled from 'styled-components';

export const MediaListRevealer = styled.img`
  cursor: pointer;
  display: ${({isSidebarOpen}) => isSidebarOpen === true ? "none" : "block"};


  ${({inComp}) => (inComp === "Sidebar" 
    ? `
    margin-top: 15px;
    margin-left: 15px;
    `
    : "")
  };
`