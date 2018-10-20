import styled from 'styled-components';

export const MediaViewerContainer = styled.div`
flex: 3;
display: flex;
flex-direction: column;
background-color: #c38d9e;
`;

export const VideoURLInputWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
`

export const VideoURLInput = styled.input`
height: 20%;
width: 50%; 
margin-right: 10px;
background-color: #41b3a3;
outline: none;
`

export const VideoPlayerWrapper = styled.div`
flex: 5;
display: flex;
justify-content: center;
align-items: center;
`

export const VideoPlayer = styled.video`
/* width: 80%; */
/* height: 80%; */
background-color: black;
`