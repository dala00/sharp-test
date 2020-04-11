const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

module.exports = async (_req, res) => {
  const image = fs.readFileSync(path.join(__dirname, 'image.png'))
  const resizedImage = await sharp(image).resize(100).toBuffer()
  res.end(resizedImage, 'binary')
}
