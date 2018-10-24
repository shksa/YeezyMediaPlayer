echo "deployToRemote script started running"
ssh sreekar339@139.59.93.218 'rm -rf ~/frontend/CRA/YeezyMediaPlayer/'
ssh sreekar339@139.59.93.218 'mkdir -p ~/frontend/CRA/YeezyMediaPlayer/'
scp -r build sreekar339@139.59.93.218:~/frontend/CRA/YeezyMediaPlayer/