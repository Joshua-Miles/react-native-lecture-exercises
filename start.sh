MY_IP=`ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'`
cd backend
bundle install
rails db:migrate
rails db:seed
FRONTEND_URL="http://$MY_IP:19006" rails s -b 0.0.0.0 &
RAILS_PROCESS=$!
cd ../frontend
npm install 
REACT_NATIVE_BACKEND_URL="http://$MY_IP:3000" npm run web
kill -9 $RAILS_PROCESS