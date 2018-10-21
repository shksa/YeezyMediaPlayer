import styled from 'styled-components';
export const MediaListContainer = styled.div`
  background-color: #41b3a3;
  flex: 1;
  height: 100%;
  overflow: scroll;
  /* justify-content: center; */
  display: ${({showSidebar}) => showSidebar === true? "block" : "none"};
  @media (max-width: 768px) {
    flex: none;
    width: 75%;
    position: absolute;
    z-index: 1;
  }
  
`;

export const MediaListWrapper = styled.div`

`;



