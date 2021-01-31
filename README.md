# GITHUB PAGES Frontend deploy

https://ibsenjg.github.io/ecom_weather/

# HEROKU Backend deploy

https://vast-thicket-28360.herokuapp.com/graphql

# server instrucions

- clone repo
- navigate to repo folder

```
cd <repo_folder>
```

- install git sub module.

```
git submodule init
git submodule update
```

- navigate to backend folder

```
cd backend
```

- install dependencies with:

```
yarn || npm i
```

- start server (watch out the port when running locally)

```
 yarn start || npm start

- or maybe you want to see it running on heroku

 heroku open graphql
```

# Heroku deploy instructions

- navigate to repo root, then go to backend folder

- add files and commit your changes

```
git add .
git commit -m "Feat <new_feature>"
```

- push to heroku repo (it will deploy automatically)

```
git push heroku master
```

- open heroku live project

```
 heroku open graphql
```

# Frontend instructions

- open new console
- navigate to repo root, then go to frontend folder

```
cd frontend
```

- install dependencies with:

```
yarn || npm i
```

- start server

```
 yarn start -o || npm start -o
```

# Gh-pages deploy instructions

- navitate to frontend folder
- create a fresh build using

```
yarn predeploy
```

- add all and commit your changes

```
git add .
git commit -m "Feat <new_build>"
```

- push your changes to github

```
git push
```

- now you can update the gh-pages branch using

```
yarn deploy
```
