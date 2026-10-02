import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { spawnSync } from 'node:child_process'
import ffmpegPath from 'ffmpeg-static'

const SOURCE_DIR = path.resolve('public/videos')
const TARGET_DIR = path.resolve(process.argv[2] || 'out/videos')
const CACHE_DIR = path.resolve('node_modules/.cache/video-optimize')

function getFileHash(filePath) {
  const buffer = fs.readFileSync(filePath)
  return crypto.createHash('sha256').update(buffer).digest('hex')
}

function formatBytes(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function hasAudioStream(filePath) {
  const result = spawnSync(ffmpegPath, ['-i', filePath], { encoding: 'utf-8' })
  const output = (result.stderr || '') + (result.stdout || '')
  return /Stream #.*Audio:/.test(output)
}

function optimizeVideo(srcFile, destFile, ext) {
  const tmpDest = `${destFile}.tmp${ext}`
  const hasAudio = hasAudioStream(srcFile)
  const audioArgs = hasAudio ? ['-c:a', 'aac', '-b:a', '128k'] : ['-an']

  let videoArgs
  if (ext === '.mp4') {
    videoArgs = [
      '-c:v', 'libx264',
      '-crf', '26',
      '-preset', 'medium',
      '-movflags', '+faststart',
      '-pix_fmt', 'yuv420p',
    ]
  } else if (ext === '.webm') {
    videoArgs = [
      '-c:v', 'libvpx-vp9',
      '-crf', '36',
      '-b:v', '1200k',
      '-cpu-used', '4',
    ]
  } else {
    return false
  }

  const args = ['-y', '-i', srcFile, ...videoArgs, ...audioArgs, tmpDest]
  const result = spawnSync(ffmpegPath, args, { stdio: 'pipe' })

  if (result.status !== 0 || !fs.existsSync(tmpDest)) {
    console.warn(`[video-optimize] Warning: Failed to optimize ${path.basename(srcFile)}.`)
    if (fs.existsSync(tmpDest)) fs.unlinkSync(tmpDest)
    return false
  }

  const origSize = fs.statSync(srcFile).size
  const optSize = fs.statSync(tmpDest).size

  if (optSize < origSize) {
    fs.renameSync(tmpDest, destFile)
    const saved = ((1 - optSize / origSize) * 100).toFixed(1)
    console.log(`[video-optimize] ${path.basename(srcFile)}: ${formatBytes(origSize)} -> ${formatBytes(optSize)} (${saved}% saved)`)
    return true
  } else {
    // If optimized file is larger, keep original
    fs.unlinkSync(tmpDest)
    fs.copyFileSync(srcFile, destFile)
    console.log(`[video-optimize] ${path.basename(srcFile)}: original is already smaller (${formatBytes(origSize)}). Kept original.`)
    return true
  }
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.log('[video-optimize] No public/videos directory found. Skipping.')
    return
  }

  if (!ffmpegPath) {
    console.warn('[video-optimize] ffmpeg binary not found. Skipping video optimization.')
    return
  }

  fs.mkdirSync(CACHE_DIR, { recursive: true })
  fs.mkdirSync(TARGET_DIR, { recursive: true })

  const files = fs.readdirSync(SOURCE_DIR)
  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (!['.mp4', '.webm'].includes(ext)) continue

    const srcPath = path.join(SOURCE_DIR, file)
    const targetPath = path.join(TARGET_DIR, file)
    const hash = getFileHash(srcPath)
    const cachedFile = path.join(CACHE_DIR, `${hash}${ext}`)

    if (fs.existsSync(cachedFile)) {
      console.log(`[video-optimize] ${file}: cache hit`)
      fs.copyFileSync(cachedFile, targetPath)
      continue
    }

    console.log(`[video-optimize] Optimizing ${file}...`)
    const success = optimizeVideo(srcPath, cachedFile, ext)
    if (success) {
      fs.copyFileSync(cachedFile, targetPath)
    } else {
      fs.copyFileSync(srcPath, targetPath)
    }
  }

  console.log('[video-optimize] Video optimization completed.')
}

main().catch((err) => {
  console.error('[video-optimize] Error during video optimization:', err)
})
