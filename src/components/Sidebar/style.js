import styled, {css} from 'styled-components';
export const MediaListContainer = styled.div`
  width: 30%;
  display: ${({showSidebar}) => showSidebar ? "flex" : "none" };
  flex-direction: column;
  background-color: yellowgreen;
  @media (max-width: 768px) {
    width: 85%;
    position: absolute;
    z-index: 1;
    height: 100%; /* beacuse position property fucks with it's flex item behavior */
  }
`;

export const IconAndMediaTypeWrapper = styled.div`
  padding: 20px 0 20px 20px;
  display: flex;
  align-items: center;
`;

export const MediaTypesContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`

export const MediaTypeWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const MediaType = styled.input`
  margin-right: 5px;
`

export const SearchBar = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-weight: bold;
`;

export const MediaSourceURLInput = styled(SearchBar)`

`

export const MediaListWrapper = styled.div`
  flex: 1;  
  overflow: scroll;
  ${({showLoader}) => 
  showLoader &&
  css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  }
`;