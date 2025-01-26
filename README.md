# Worldtravel Game Transportation Random Generator

![just-the-basics](./worldtravel-game.png)

## How to run

On the docker host:

```bash
cd docker-server-env/
git clone git@github.com:ascheucher/worldtravel-game.git
cd worldtravel-game/
./build.sh

docker run \
  -d \
  --restart unless-stopped \
  --name worldtravel-game \
  --network internal-docker-net \
  -p 3000:3000 \
  worldtravel-game
```

Nginx config section for *~/docker-server-env/docker-compose-ephemeral/nginx-reverse-proxy/nginx.conf*:

```nginx
    ############################################
    #     worldtravel-game section

    upstream worldtravel-game {
        server worldtravel-game:3000;
    }
    server {
        listen 80;
        server_name worldtravel-game.hill.eremite.cc;
        return 301 https://$server_name$request_uri;
    }
    server {
        listen 443 ssl;
        http2  on;
        server_name worldtravel-game.hill.eremite.cc;

        ssl_certificate       /etc/letsencrypt/live/worldtravel-game.hill.eremite.cc/fullchain.pem;
        ssl_certificate_key   /etc/letsencrypt/live/worldtravel-game.hill.eremite.cc/privkey.pem;
        ssl_protocols         SSLv3 TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers           HIGH:!aNULL:!MD5;
        ssl_session_cache     shared:SSL:2m;
        location / {
            proxy_pass https://worldtravel-game/;
        }
    }
```

Restart nginx:

```bash
sudo systemctl restart docker-compose-ephemeral@nginx-reverse-proxy.service
sudo systemctl status docker-compose-ephemeral@nginx-reverse-proxy.service
```

Add the domain to the **root's** *~/dockerized-certbot/domains-env* file and create ths TLS certificates.

Finally add the DNS entries:

```bash
samba-tool dns add localhost hill.eremite.cc worldtravel-game CNAME docker-host-01.hill.eremite.cc -U Administrator
```
