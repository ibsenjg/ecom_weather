clone
cd repo
git submodule init
git submodule update

cd backend
yarn || npm i
yarn start || npm start

port 5000

heroku open graphql

open new console
navigate to repo root

cd frontend

yarn || npm i
yarn start -o || npm start -o

deploy to gh-pages

must be on frontend folder or..
navigate to repo root
cd frontend
yarn deploy
