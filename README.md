# Tales Of Shadowland - Game Server

## Host / Proxy

Nginx Configuration

```
$ sudo nano /etc/nginx/site-enable/default
```

```
upstream api {
    server localhost:3000;
}

server {
    listen 80;
    listen [::]:80;
    server_name api.tos.world;

    location / {
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Dev Mode

To start the application in dev mode use the following commands

```bash
$ git clone git@github.com:andrehrferreira/tos-mmorpg-server.git
$ cd tos-mmorpg-server && yarn
```

Create the .env file
```bash
APP_NAME = "Tales Of Shadowland"
SERVER_NAME="Eurone: Latin America (BR)"
SERVER_LIMIT_PLAYERS=1000
SERVER_PORT=3000
SERVER_MAINSERVER=true

TOS_JWT_SECRET="";
TOS_EMAIL_SECRET="";
TOR_CHARS_PER_ACCOUNT=5

EMAIL_FROM="Tales Of Shadowland <no-reply@talesofshadowland.com>"
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USE_GOOGLEAPIS=false
SMTP_HOST=""
SMTP_USERNAME=""
SMTP_PASSWORD=""

AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""

DATABASE_TYPE=sqlite
DATABASE_MONGODB_URI=""
DATABASE_SQLITE_PATH="./database.sqlite"

REDIS_URL="redis://localhost:6379"
REDIS_HOST="localhost"
REDIS_PORT="6379"

MONGODB_URL="mongodb://localhost:27017/tos?directConnection=true&authSource=admin"
MONGODB_DATABASE="tos"
MONGODB_USER=""
MONGODB_PASS=""

RECAPTCHA_PRIVATE=""

STEAM_KEY=""
STEAM_APPID=""
```

To run in development mode
```bash
$ yarn dev
```

## Prod

```bash
$ yarn build
$ yarn start
```

## Access

API
```
http://localhost:3000
```
