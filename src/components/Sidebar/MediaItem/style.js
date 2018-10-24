import styled from 'styled-components';


export const Li = styled.li`
  cursor: pointer;
`;

export const Item = styled.p`
  :hover {
    color: white;
  }
  :active {
    color: blueviolet;
  }
  color: ${({isClicked}) => isClicked && "blue"};
  font-weight: bold;
`