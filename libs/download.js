import fs from 'fs'
import fetch from 'node-fetch'

export async function downloadFile(url, filePath, fileName) {
  removeFileDir(filePath)
  fs.mkdirSync(filePath)
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/octet-stream' }
  })
  const dest = fs.createWriteStream(`${filePath}/${fileName}`)
  res.body.pipe(dest)
  return new Promise((resolve, reject) => {
    dest.on('finish', resolve)
    dest.on('error', reject)
  })
}

export const getRangeCode = (len = 6) => {
  var orgStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let returnStr = ''
  for (var i = 0; i < len; i++) {
    returnStr += orgStr.charAt(Math.floor(Math.random() * orgStr.length))
  }
  return returnStr
}

export const download = async url => {
  const fileName = getRangeCode(10) + '.png'
  const outPath = './temp'
  const fullPath = `${outPath}/${fileName}`
  await downloadFile(url, outPath, fileName)
  return fullPath
}

// path：要删除的文件夹路径
export const removeFileDir = path => {
  var files = fs.readdirSync(path)
  for (let item of files) {
    var stats = fs.statSync(`${path}/${item}`)
    if (stats.isDirectory()) {
      removeFileDir(`${path}/${item}`)
    } else {
      fs.unlinkSync(`${path}/${item}`)
    }
  }
  fs.rmdirSync(path)
}
