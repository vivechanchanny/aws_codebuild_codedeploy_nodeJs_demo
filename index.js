const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
  res.send('Hello World v2 channy now you are visible now! version 002 ')
})

app.get('/status', (req, res) => {
    res.send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})