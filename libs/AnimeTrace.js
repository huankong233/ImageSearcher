import fetch from 'node-fetch'
import { FormData } from 'formdata-node'
import { fileFromPath } from 'formdata-node/file-from-path'
import { download } from './download.js'
import fs from 'fs'

export const BASE_URL = 'https://aiapiv2.animedb.cn/ai/api/detect'

export async function AnimeTrace(req) {
  const { url, imagePath } = req
  const form = new FormData()
  if (imagePath) {
    form.append('image', await fileFromPath(imagePath))
    return await request(req, form)
  } else if (url) {
    //download image
    const fullPath = await download(url)
    form.append('image', await fileFromPath(fullPath))
    const data = await request(req, form)
    fs.unlinkSync(fullPath)
    return data
  } else {
    throw Error('please input file or url')
  }
}

export const request = async (req, form) => {
  const { model, mode } = req

  const response = await fetch(
    `${BASE_URL}?model=${model ? model : 'anime'}&force_one=${mode ? mode : 1}`,
    {
      method: 'POST',
      body: form
    }
  ).then(res => res.json())

  if (response.code === 0) {
    return response
  } else {
    console.log(response)
    throw new Error('请求失败')
  }
}
