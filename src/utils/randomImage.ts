import fs from 'fs'
import path from 'path'

export function getRandomImage(): string {
  const imagesDirectory = path.join(process.cwd(), 'src/assets/images')
  const files = fs
    .readdirSync(imagesDirectory, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file.name))
    .map((file) => `/src/assets/images/${file.name}`)

  const randomIndex = Math.floor(Math.random() * files.length)
  return files[randomIndex]
}
