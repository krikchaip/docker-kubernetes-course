import express from 'express'

const PORT = 8080

const app = express()

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`)
})
