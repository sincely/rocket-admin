/**
 * @description 创建a标签下载文件
 * @export createDownload
 * @param {*} blob
 * @param {*} fileName
 * @param {*} fileType
 * @returns {*}
 */
export function createDownload(blob, fileName, fileType) {
  if (!blob || !fileName || !fileType) {
    return
  }
  const element = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  element.style.display = 'none'
  element.href = url
  element.download = `${fileName}.${fileType}`
  document.body.appendChild(element)
  element.click()
  if (window.URL) {
    window.URL.revokeObjectURL(url)
  } else {
    window.webkitURL.revokeObjectURL(url)
  }
  document.body.removeChild(element)
}
