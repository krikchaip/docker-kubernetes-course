import express from 'express'
import { createClient } from 'redis'

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080
const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379'

const app = express()
const redisClient = createClient({ url: REDIS_URL })

app.get('/', async (req, res) => {
  const visits = await redisClient.incr('visits')
  res.send(`<h1>Number of visits: ${visits}</h1>`)
})

app.listen(PORT, async () => {
  redisClient.on('error', console.error)
  await redisClient.connect()

  if (!redisClient.isReady) {
    console.error(`redis connection failed!`)
    return process.exit(1)
  }

  console.log(`connected to redis-server at ${REDIS_URL}`)
  console.log(`server is listening at port ${PORT}`)
})
