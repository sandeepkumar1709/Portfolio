#!/usr/bin/env node
/**
 * Generates optimized profile image variants for sharper display.
 * - profile-1x.jpeg: 320px for standard displays (smaller, faster load)
 * - profile-2x.jpeg: 640px for retina/high-DPI displays
 * Run: node scripts/generate-profile-2x.mjs
 */
import sharp from "sharp"
import { existsSync } from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const imagesDir = join(root, "public", "images")
const inputPath = join(imagesDir, "profile.jpeg")

if (!existsSync(inputPath)) {
  console.error("profile.jpeg not found at", inputPath)
  process.exit(1)
}

const { width, height } = await sharp(inputPath).metadata()
console.log(`Source: ${width}x${height}`)

const processImage = async (outputPath, size, label) => {
  await sharp(inputPath)
    .resize(size, size, {
      fit: "cover",
      position: "top", // Keep head visible, crop from bottom
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6, m1: 1, m2: 0.5 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(outputPath)
  console.log(`Generated ${label}`)
}

await processImage(join(imagesDir, "profile-1x.jpeg"), 320, "profile-1x.jpeg (320px)")
await processImage(join(imagesDir, "profile-2x.jpeg"), 640, "profile-2x.jpeg (640px)")
