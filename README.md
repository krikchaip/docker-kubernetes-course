# Docker & Kubernetes Course

Udemy Link: [Docker and Kubernetes the complete guide](https://udemy.com/course/docker-and-kubernetes-the-complete-guide)

## Commands

### Build the app

```bash
$ docker build . -t $(basename $(pwd))
```

### Run the app container

```bash
# assuming redis is running inside docker
$ docker run \
  -p 3000:3000 \
  -e REDIS_URL=redis://host.docker.internal:6379 \
  docker-kubernetes-course
```

### Redis CLI

```bash
$ docker exec -it docker-kubernetes-course-redis-1 redis-cli
```
