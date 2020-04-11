const express = require('express')
const fs = require('fs')
const sharp = require('sharp')
const app = express()

app.get('/', async (req, res) => {
  const image = fs.readFileSync('image.png')
  const resizedImage = await sharp(image).resize(100).toBuffer()
  res.end(resizedImage, 'binary')
})

app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port 3000!')
)
