import * as cheerio from 'cheerio'
import _ from 'lodash'

export function parse(body) {
  const $ = cheerio.load(body)
  return _.map($('.glte > tbody > tr'), result => {
    const title = $('.glink', result),
      [image] = $('.gl1e img', result),
      [link] = $('.gl1e a', result),
      type = $('.gl3e .cn', result),
      date = $('.gl3e [id^=posted]', result),
      tags = $('.gl4e table td > div[class]', result)
    return {
      title: title.text(),
      image: image.attribs.src,
      link: link.attribs.href,
      type: type.text().toUpperCase(),
      date: date.text(),
      tags: _.map(tags, tag => $(tag).text())
    }
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
