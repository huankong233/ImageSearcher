import { ascii2d, SauceNAO, IqDB, TraceMoe, EHentai } from './index.js'

/**
 * ascii2d
 * 传入参数 type : "color" /  "bovw"
 *     用于 :     "颜色模式" "特征模式"
 * 传入参数 imagePath : "文件路径"
 */
// let ascii2d_response = await ascii2d({
//   type: 'bovw',
//   imagePath: './test.jpg'
// })
// console.dir(ascii2d_response, { depth: null })

/**
 * SauceNAO
 * 传入参数 hide : true / false
 *     用于 : 过滤敏感内容
 * 传入参数 imagePath : "文件路径"
 */
// const SauceNAO_response = await SauceNAO({
//   hide: false,
//   imagePath: './test.jpg'
// })
// console.dir(SauceNAO_response, { depth: null })

/**
 * IqDB
 * 传入参数 discolor : true / false
 *     用于 : 搜索时去除颜色
 * 传入参数 services : ['danbooru','konachan','yandere','gelbooru','sankaku_channel','e_shuushuu','zerochan','anime_pictures']
 *     用于 : 定义搜索时使用的引擎
 * 传入参数 imagePath : "文件路径"
 */
// const IqDB_response = await IqDB({
//   discolor: false,
//   imagePath: './test.jpg',
//   services: [
//     'danbooru',
//     'konachan',
//     'yandere',
//     'gelbooru',
//     'sankaku_channel',
//     'e_shuushuu',
//     'zerochan',
//     'anime_pictures'
//   ]
// })
// console.dir(IqDB_response, { depth: null })

/**
 * TraceMoe
 * 传入参数 cutBorders : true / false
 *     用于 : 搜索时裁剪图片边缘
 * 传入参数 imagePath : "文件路径"
 */
// const TraceMoe_response = await TraceMoe({
//   cutBorders: true,
//   imagePath: './test.jpg'
// })
// console.dir(TraceMoe_response, { depth: null })

/**
 * E-Hentai
 * 传入参数 site : "eh" / "ex"
 *     用于 : 定义搜索时使用哪个画廊
 * 传入参数 cover: true / false
 *     用于 : 定义是否仅搜索封面
 * 传入参数 deleted: true / false
 *     用于 : 定义是否搜索已删除的内容
 * 传入参数 similar: true / false
 *     用于 : 定义是否搜索相似的内容
 * 传入参数 EH_COOKIE: 字符串
 *     用于 : 定义使用EX站点时必须携带的Cookie
 * 传入参数 imagePath : "文件路径"
 */
// const EHentai_response = await EHentai({
//   site: 'eh',
//   similar: true,
//   EH_COOKIE:'这里写请求头里要携带的Cookie即可',
//   imagePath: './Ehentai_test.jpg'
// })
// console.dir(EHentai_response, { depth: null })
