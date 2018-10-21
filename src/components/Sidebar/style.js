import styled from 'styled-components';
export const MediaListContainer = styled.div`
  background-color: #41b3a3;
  flex: 1;
  height: 100%;
  
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
  overflow: scroll;
  position: relative;
  top: 60px;
  height: 90%;
`;


export const IconAndSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  position: fixed;
`;

export const SearchBar = styled.input`
  height: 20px;
  margin-left: 10px;
  font-size: 20px;
`;