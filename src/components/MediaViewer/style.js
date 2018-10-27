import styled from 'styled-components';

export const MediaViewerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

export const MediaURLInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-around;
`

export const MediaURLInput = styled.input`
  background-color: transparent;
  outline: none;
  font-size: 15px;
  color: white;
  border: none;
`

export const MediaPlayerWrapper = styled.div`
  flex: 5;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoPlayer = styled.video`
  max-height: 100%;
  max-width: 100%;
`

export const AudioPlayer = styled.audio``