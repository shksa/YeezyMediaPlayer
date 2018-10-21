import styled from 'styled-components';
export const MediaListContainer = styled.div`
  background-color: #41b3a3;
  flex: 1;
  height: 100%;
  overflow: scroll;
  /* justify-content: center; */
  ${({showSidebar}) => showSidebar 
    ? 
    `
    display: block;
    @media (max-width: 768px) {
      flex: none;
      width: 75%;
      position: absolute;
      z-index: 1;
    }
    ` 
    : 
    `
    display: none;
    // @media (min-width: 768px) {
    //   display: flex;
    // }
    `
  }
  
`;

export const MediaListWrapper = styled.div`

`;



