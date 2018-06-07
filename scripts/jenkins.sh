#!/bin/sh
yarn
yarn build
tar -cvf ./build.tar ./build
# expect -c "
#   spawn scp -P 23722 ./build.zip xuliugen@xuliugen.vicp.io:/home/xuliugen/www/
#   expect  \"*assword\" {set timeout 300; send \"uppfind415\r\";}
#   expect \"*#\"
#   interact"
scp -P 23722 ./build.tar xuliugen@xuliugen.vicp.io:/home/xuliugen/www/
# expect -c "
#   spawn ssh xuliugen@xuliugen.vicp.io -p 23722
#   expect  \"*assword\" {set timeout 300; send \"uppfind415\r\";}
#   expect \"*#\"
#   interact"
ssh xuliugen@192.168.1.237 'sh /home/xuliugen/www/deploy.sh'
