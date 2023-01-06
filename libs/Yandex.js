import fetch from 'node-fetch'

export const BASE_URL = "https://yandex.com/"

export async function Yandex(req) {
  const { url } = req
  const response = await fetch(`${BASE_URL}images/search?cbir_page=similar&rpt=imageview&url=${url}`).then(res => res.text())
  return parse(response)
}

import * as cheerio from 'cheerio'
import _ from 'lodash'

export function parse(body) {
  const $ = cheerio.load(body, { decodeEntities: true })
  return _.map($('.serp-list .serp-item'), item => {
    const data = JSON.parse(item.attribs['data-bem'])['serp-item']
    const { freshness, dups, snippet } = data
    return { freshness, dups, snippet, origin: data }
  }).filter(v => v !== undefined)
}