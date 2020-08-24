import qiniu from 'qiniu'

function getUploadToken () {
  const accessKey = 'ABeQdnGSEbCHyzClr7OIbzP62sK9-Wpt6PQmE752'
  const secretKey = '9a38b5LkyzSpMXF-wJGJ30e8dI5XF5L3DSf-Gb-x'
  const bucket = 'wangji'
  // 定义鉴权对象
  const mac = qiniu.auth.digest.Mac(accessKey, secretKey)
  // 上传凭证
  const options = {
    scope: bucket,
    // 自定义凭证有效期 单位：s
    expires: 3600 * 24,
    returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    callbackBodyType: 'application/json'
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  if (uploadToken) {
    return uploadToken
  } else return false
}
export default getUploadToken
