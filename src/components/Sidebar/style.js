import styled, {css} from 'styled-components';
export const MediaListContainer = styled.div`
  width: 30%;
  display: ${({showSidebar}) => showSidebar ? "block" : "none" };
  background-color: yellowgreen;
  ${({showLoader}) => 
  showLoader &&
  css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  }
  @media (max-width: 768px) {
    width: 85%;
    position: absolute;
    z-index: 1;
    height: 100%; /* beacuse position property fucks with it's flex item behavior */
  }
`;

export const SidebarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MediaListWrapper = styled.div`
  flex: 1;  
  overflow: scroll;
`;


export const IconAndSearchBarWrapper = styled.div`
  padding: 20px 0 20px 20px;
`;

export const SearchBar = styled.input`
  margin-top: 10px;
  padding: 10px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-weight: bold;
`;