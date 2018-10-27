import styled from 'styled-components';
import { SearchBar } from '../../common/common';


export const Li = styled.li`
  cursor: pointer;
  margin: 10px 0 10px 0;
`;

export const ItemAndSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.p`
  margin: 0 10px 0 0;
  :hover {
    color: #85144b;
  }
  :active {
    color: #39CCCC;
  }
  color: ${({isClicked}) => isClicked && '#2ECC40'};
  font-weight: bold;
`

export const ItemSearchBar = styled(SearchBar)`
  display: ${({showSearchBar}) => !showSearchBar && "none"};
  width: 50px;
  padding: 2px 5px 2px 5px;
  font-size: 13px;
  border: 2px solid white;
  :focus {
    border-color: #1a73e8;
    border-radius: 15px;
  }
`