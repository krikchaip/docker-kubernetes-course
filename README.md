# Docker & Kubernetes Course

Udemy Link: [Docker and Kubernetes the complete guide](https://udemy.com/course/docker-and-kubernetes-the-complete-guide)

## Commands

### Rebuild dev container image

```bash
$ docker rm -fv node-app; \
  docker rmi "$(basename $(pwd))-node-app"; \
  docker compose build --no-cache node-app
```

### Build the app

```bash
$ docker rmi $(basename $(pwd)); docker build . \
  --no-cache \
  -f build/Dockerfile.prod \
  -t $(basename $(pwd)) \
  --build-arg REDIS_URL=redis://host.docker.internal:6379 \
```

### Run the app container

```bash
# assuming redis is running inside docker
$ docker run -p 4001:4001 --rm $(basename $(pwd))
```

### Redis CLI

```bash
$ docker compose exec -it redis-server redis-cli
```
