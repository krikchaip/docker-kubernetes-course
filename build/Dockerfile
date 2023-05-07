FROM node:18-alpine

RUN npm install -g pnpm@7.27

WORKDIR /app

# first arg -> [relative path to build "context"]
# second arg -> [path inside container]
COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY src/ src/

ENV PORT=3000

CMD ["pnpm", "start"]
