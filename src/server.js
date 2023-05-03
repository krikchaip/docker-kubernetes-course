import express from 'express'
import { createClient } from 'redis'

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080
const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379'

const app = express()
const redisClient = createClient({ url: REDIS_URL })

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(PORT, async () => {
  redisClient.on('error', console.error)
  await redisClient.connect()

  console.log(`connected to redis-server at ${REDIS_URL}`)
  console.log(`server is listening at port ${PORT}`)
})
