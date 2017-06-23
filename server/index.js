import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, 'build')))

app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  next()
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || '3001'

app.listen(port)
console.log('[server] Listening on ', port)

process.on('SIGINT', () => {
  console.log('[server] shutting down')
  process.exit()
})
