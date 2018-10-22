import styled from 'styled-components';

export const MediaViewerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #c38d9e;
  @media (max-width: 768px) {
    flex: ${({isSidebarOpen}) => isSidebarOpen ? 0 : 1};
  }
`;

export const VideoURLInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-around;
`

export const VideoURLInput = styled.input`
  padding: 10px;
  background-color: black;
  outline: none;
  font-weight: bold;
  font-size: 15px;
  color: white;
`

export const VideoPlayerWrapper = styled.div`
  flex: 5;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoPlayer = styled.video`
  width: 100%;
  /* height: 100%; */
  background-color: black;
`