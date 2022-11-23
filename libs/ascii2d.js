import * as cheerio from 'cheerio'
import _ from 'lodash'
export function parse(body) {
  const $ = cheerio.load(body, { decodeEntities: true })
  return _.map($('.item-box'), item => {
    const detail = $('.detail-box', item),
      hash = $('.hash', item),
      info = $('.info-box > .text-muted', item),
      [image] = $('.image-box > img', item)
    const [source, author] = $('a[rel=noopener]', detail)
    if (!source && !author) return
    return {
      hash: hash.text(),
      info: info.text(),
      image: new URL(image.attribs['src'] ?? image.attribs['data-cfsrc'], BASE_URL).toString(),
      source: source ? { link: source.attribs.href, text: $(source).text() } : undefined,
      author: author ? { link: author.attribs.href, text: $(author).text() } : undefined
    }
  }).filter(v => v !== undefined)
}

import fetch from 'node-fetch'
import { FormData } from 'formdata-node'
import { fileFromPath } from 'formdata-node/file-from-path'

export async function ascii2d(req) {
  const { type, imagePath } = req
  const form = new FormData()
  form.append('file', await fileFromPath(imagePath))
  const colorResponse = await fetch(`${BASE_URL}/search/file`, {
    method: 'POST',
    body: form
  })
  let response
  if (type === 'color') {
    response = await colorResponse.text()
  } else {
    const bovwUrl = colorResponse.url.replace('/color/', '/bovw/')
    response = await fetch(bovwUrl).then(res => res.text())
  }
  return parse(response)
}

export const BASE_URL = 'https://ascii2d.obfs.dev'
