echo "deployToRemote script started running"
ssh sreekar339@139.59.93.218 'rm -rf ~/yeezy-media-player'
scp -r build sreekar339@139.59.93.218:~/yeezy-media-player