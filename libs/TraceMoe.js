export function parse(res) {
  const { result } = JSON.parse(res)
  return result
    .map(result => ({
      preview: result.image,
      similarity: result.similarity * 100,
      name: result.anilist?.title,
      nsfw: result.anilist?.isAdult,
      from: result.from * 1000,
      to: result.to * 1000,
      episode: result.episode,
      file: result.filename
    }))
    .sort((a, b) => a.similarity - b.similarity)
    .reverse()
}

import fetch from 'node-fetch'
import { FormData } from 'formdata-node'
import { fileFromPath } from 'formdata-node/file-from-path'

export async function TraceMoe(req) {
  const { imagePath, cutBorders } = req

  const form = new FormData()
  form.append('image', await fileFromPath(imagePath))

  const response = await fetch(
    `${BASE_URL}/search?anilistInfo=1${cutBorders ? '&&cutBorders=1' : ''}`,
    {
      method: 'POST',
      body: form
    }
  ).then(res => res.text())

  return parse(response)
}

export const BASE_URL = 'https://api.trace.moe'
