import * as cheerio from 'cheerio'
import _ from 'lodash'

export function parse(body) {
  const $ = cheerio.load(body)
  return _.map($('.gltc > tbody > tr'), (result, index) => {
    if (index !== 0) {
      const title = $('.glink', result),
        [image] = $('.glthumb img', result),
        [link] = $('.gl3c a', result),
        type = $('.gl1c .cn', result),
        date = $('.gl2c [id^=posted]', result).eq(0),
        tags = $('.gl3c .gt', result)
      return {
        title: title.text(),
        image: image.attribs.src,
        link: link.attribs.href,
        type: type.text().toUpperCase(),
        date: date.text(),
        tags: _.map(tags, tag => $(tag).text())
      }
    }
  }).filter(res => {
    return res != undefined
  })
}

import fetch from 'node-fetch'
import { FormData } from 'formdata-node'
import { fileFromPath } from 'formdata-node/file-from-path'

export async function EHentai(req) {
  const { site, cover, deleted, similar, imagePath, EH_COOKIE } = req

  const form = new FormData()
  form.append('sfile', await fileFromPath(imagePath))
  form.append('f_sfile', 'search')
  if (cover) form.append('fs_covers', 'on')
  if (similar) form.append('fs_similar', 'on')
  if (deleted) form.append('fs_exp', 'on')

  let response
  if (site === 'eh') {
    response = await fetch(BASE_URLs['eh'], {
      method: 'POST',
      body: form
    }).then(res => res.text())
  } else if (site === 'ex') {
    response = await fetch(BASE_URLs['ex'], {
      method: 'POST',
      body: form,
      headers: { Cookie: EH_COOKIE }
    }).then(res => res.text())
  }

  return parse(response)
}

export const BASE_URLs = {
  eh: 'https://upld.e-hentai.org/image_lookup.php',
  ex: 'https://exhentai.org/upld/image_lookup.php'
}
