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
    req.imagePath = fullPath
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
    return await parse(response.data, req)
  } else {
    console.log(response)
    throw new Error('请求失败')
  }
}

import Jimp from 'jimp'
export const parse = async (response, req) => {
  if (req.preview) {
    let image
    try {
      image = await Jimp.read(req.imagePath)
      const width = image.getWidth()
      const height = image.getHeight()
      for (let i = 0; i < response.length; i++) {
        const box = response[i].box
        const newImage = image.clone()
        // 裁切图片
        newImage.crop(
          width * box[0],
          height * box[1],
          width * (box[2] - box[0]),
          height * (box[3] - box[1])
        )
        response[i].preview = (await newImage.getBase64Async(Jimp.AUTO)).split(',')[1]
      }
    } catch (error) {
      for (let i = 0; i < response.length; i++) {
        response[i].preview = 'fail unsupport image type'
      }
    }
  }
  return response
}
