import styled from 'styled-components';
export const loaderImg = styled.img`
  height: ${({forComp}) => forComp === "mediaItem" ? "100px" : null};
  width: ${({forComp}) => forComp === "mediaItem" ? "100px" : null};
`;