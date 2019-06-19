# Deployment

## Overview

- What is Deployment?
- What does deployment look like in the industry?
- Deploying the React and Rails apps to Heroku

## Cloud Providers
- AWS
- Google Cloud
- Azure
- Heroku
- Digital Ocean
- Linode
- ...

## Deployment

So far, frontend and backend code has run only on our computer.

Goals:
- run our app on other computers
- point a URL to our app

## Deployments: What's different between local and prod?
- speed
  - network time becomes a concern
- fetches have different urls
- scale:
  - 19000 hospitals
  - normally, on localhost, we don't store millions of users!
- compatibility
  - browser compatibility
  - integrating with other developers code

## What's new?
- Servers
- DNS Routing and domain names
- Load Balancers
- Databases and caching
- Microservices
  - at least two services
  - deploy a separate service to serve your react app
  - point your client at the server
  - cors configured
    - `*` -> 'frontend.com'
- Diaster Recovery

## Deploying to Heroku
- Strategy:
  - deploy backend
  - deploy frontend
  - test

#### Create a heroku account
  - https://devcenter.heroku.com/articles/heroku-cli
  - Install Heroku CLI with `brew install heroku/brew/heroku`
    - Check `heroku` works in the terminal

#### Backend:
  - Make sure your ruby version is up to date
  - [Change DB to postgres](https://www.daveferrara1.com/ruby-in-rails-switch-from-sqlite3-to-postgres/)
  - `heroku create <name-for-backend>`
  - `git remote -v` to check that you have a new remote
  - `git push heroku master`
  - `heroku run rake db:migrate`
  - `heroku run rake db:seed`

#### Front End:
  - Change URL to fetch from deployed back end
    - Test it locally
  - `heroku create <name-for-frontend>`
  - `git remote -v` to check that you have a new remote
  - `git push heroku master`

#### CORS:
  - Change CORS file to only accept responses from deployed from frontend
  - Push up to heroku and test changes

#### Deploying Mod 3 Projects
 - Back End Server: same process
 - Front End single page: Git pages
    - https://github.com/thuyanduong-flatiron/cats-frontend-gitpages
