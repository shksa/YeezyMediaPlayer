import styled from 'styled-components';
export const MediaListContainer = styled.div`
  width: 30%;
  display: ${({showSidebar}) => showSidebar ? "block" : "none" };
  background-color: yellowgreen;
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