import styled, {css} from 'styled-components';
import { SearchBar } from '../common/common';
export const MediaListContainer = styled.div`
  width: 30%;
  display: ${({showSidebar}) => showSidebar ? "flex" : "none" };
  flex-direction: column;
  background-color: #FFFFFF;
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

export const MediaSourceURLInput = styled.input`
  margin: 0 10px 0 10px;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  border-radius: 15px;
  outline: none;
  width: 40%;
  align-self: center;
`

export const MediaListWrapper = styled.div`
  margin: 10px 0 0 10px;
  flex: 1;  
  overflow: scroll;
  ${({showLoader}) => showLoader &&
  css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  }
`;

export const ListSearchBar = styled(SearchBar)`
  width: 100px;
  font-size: 15px;
  border: none;
  border-bottom: 2px solid;
  border-color: black;
  :focus {
    border-color: #1a73e8;
  }
`