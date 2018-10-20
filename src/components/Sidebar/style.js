import styled from 'styled-components';
export const MediaListContainer = styled.div`
  background-color: #41b3a3;
  flex: 1;
  overflow: scroll;
  display: flex;
  justify-content: ${props => props.showLoader ? "center" : null};
`;




