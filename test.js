import { ascii2d, SauceNAO, IqDB, TraceMoe, EHentai, Yandex, AnimeTrace } from './index.js'

/**
 * ascii2d
 * 传入参数 type : "color" /  "bovw"
 *     用于 :     "颜色模式" "特征模式"
 * 传入参数 imagePath : "文件路径"
 * 传入参数 url : "图片网址"
 * 传入参数 proxy : "是否使用反代请求"
 */
// let ascii2d_response = await ascii2d({
//   type: 'bovw',
//   url: 'https://gchat.qpic.cn/gchatpic_new/0/0-0-492A374606A6ACE39A820352F19D2DB5/0',
//   proxy: true
//   // imagePath: './test.jpg'
// })
// console.dir(ascii2d_response, { depth: null })

/**
 * SauceNAO
 * 传入参数 hide : true / false
 *     用于 : 过滤敏感内容
 * 传入参数 imagePath : "文件路径"
 * 传入参数 url : "图片网址"
 */
// const SauceNAO_response = await SauceNAO({
//   hide: false,
//   url: "https://gchat.qpic.cn/gchatpic_new/0/0-0-492A374606A6ACE39A820352F19D2DB5/0"
//   // imagePath: './test.jpg'
// })
// console.dir(SauceNAO_response, { depth: null })

/**
 * IqDB
 * 传入参数 discolor : true / false
 *     用于 : 搜索时去除颜色
 * 传入参数 services : ['danbooru','konachan','yandere','gelbooru','sankaku_channel','e_shuushuu','zerochan','anime_pictures']
 *     用于 : 定义搜索时使用的引擎
 * 传入参数 imagePath : "文件路径"
 * 传入参数 url : "图片网址"
 */
// const IqDB_response = await IqDB({
//   discolor: false,
//   // imagePath: './test.jpg',
//   url: "https://gchat.qpic.cn/gchatpic_new/0/0-0-492A374606A6ACE39A820352F19D2DB5/0",
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
 * Yandex
 * 传入参数 url : "图片网址"
 * 传入参数 cookie : "可以有效避免被拦截(?貌似是的)"
 */
// const Yandex_response = await Yandex({
//   url: 'https://i0.hdslb.com/bfs/music/5df67b07d8b4318ef7e65f33a543f4d939a4b125.jpg@370w_370h.webp'
// })
// console.dir(Yandex_response, { depth: null })

/**
 * TraceMoe
 * 传入参数 cutBorders : true / false
 *     用于 : 搜索时裁剪图片边缘
 * 传入参数 imagePath : "文件路径"
 * 传入参数 url : "图片网址"
 */
// const TraceMoe_response = await TraceMoe({
//   cutBorders: true,
//   url: "https://gchat.qpic.cn/gchatpic_new/0/0-0-492A374606A6ACE39A820352F19D2DB5/0",
//   // imagePath: './test.jpg'
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
 * 传入参数 url : "图片网址"
 */
// const EHentai_response = await EHentai({
//   site: 'eh',
//   similar: true,
//   // EH_COOKIE: '这里写请求头里要携带的Cookie即可',
//   // imagePath: './Ehentai_test.jpg'
//   url: "https://p0.meituan.net/csc/01c18d9300be39d641e5ed6e75eae2df344267.jpg"
// })
// console.dir(EHentai_response, { depth: null })

/**
 * AnimeTrace
 * 传入参数 imageUrl : "图片地址"
 *     用于 : 定义搜索时使用哪个画廊
 * 传入参数 model:
 *         动漫 : "anime" / "pre_stable" / "anime_model_lovelive"
 *         galgame : "game" / "game_model_kirakira"
 *     用于 : 搜索类型
 * 传入参数 mdoe: 0 / 1
 *     用于 : 0为返回单个 1为返回多个
 * 传入参数 preview: true / false
 *     用于 : 是否帮助制作好裁剪后的图片(返回base64格式)
 */
// const AnimeTrace_response = await AnimeTrace({
//   model: 'game_model_kirakira',
//   mode: 0,
//   imagePath: './1.jpg',
//   // url: 'https://th.bing.com/th/id/R.f4bf4d7653c717077ac8a60e44d1e707?rik=7mm83th4yJto8w&riu=http%3a%2f%2fi2.hdslb.com%2fbfs%2farchive%2f979b12d0baf07446c93c2bb0615759e3d1643b5a.jpg&ehk=IFpbI8QO5HKNuRVW%2bWTxlFdBNXxkoHrFjNCjCOr8SB4%3d&risl=&pid=ImgRaw&r=0',
//   preview: true
// })
// console.dir(AnimeTrace_response, { depth: null })
