# Docker & Kubernetes Course

Udemy Link: [Docker and Kubernetes the complete guide](https://udemy.com/course/docker-and-kubernetes-the-complete-guide)

## Commands

### Build the app

```bash
$ docker build . -t $(basename $(pwd))
```

### Run the app container

```bash
$ docker run -p 3000:3000 docker-kubernetes-course
```
