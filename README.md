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
  -p 4321:4321 \
  worldtravel-game
```
