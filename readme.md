# Single page app
Single page app with frontend in typescript + React/Vue, and backend in python

## VS Code tips
- Command P 
- Useless comment

## Info
- install: `brew install nginx`
- nginx conf: `/opt/homebrew/etc/nginx/nginx.conf`
- welcome page: `http://localhost:8081/html/`
- custom page: `/opt/homebrew/Cellar/nginx/1.29.0/html` : the index page should be here

## Start
- start: `brew services start nginx`
- reload: `brew services reload nginx`
- stop: `brew services stop nginx`
- check port: `lsof -i :8081`
- check nginx: `ps aux | grep nginx`
- access main page: `http://localhost:8081/`