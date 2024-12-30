import { h, onBeforeUnmount, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import JSZip from 'jszip'
import { createDownload } from '@/utils/downloadFile'

/**
 * @description  下载文件
 * @export useDownloadFile
 */
export default function useDownloadFile() {
  let xhr = null
  let downloading = false // 限制同一文件同时触发多次下载
  const progress = ref(0)
  onBeforeUnmount(() => {
    if (xhr) {
      xhr.abort()
      xhr = null
    }
  })
  // 下载文件blob
  const downloadBlob = (url, fileName = '', fileType = '', autoDownload = false) => {
    return new Promise((resolve, reject) => {
      xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.open('get', url, true)
      xhr.onprogress = function (e) {
        progress.value = Math.floor((e.loaded / e.total) * 100)
        if (progress.value === 100) {
          progress.value = 0
          downloading = false
        }
      }
      xhr.onloadend = function (e) {
        if ([200, 304].includes(e.target.status)) {
          const blob = e.target.response
          if (autoDownload) {
            createDownload(blob, fileName, fileType)
          }
          xhr = null
          resolve(blob)
        }
      }
      xhr.onerror = function (e) {
        downloading = false
        Modal.error({
          title: '温馨提示',
          content: '下载发生异常，请重试'
        })
        reject(e)
      }
      xhr.send()
    })
  }

  // 下载文件
  const downloadFile = async (options) => {
    try {
      let infoModal
      if (downloading || !options.url || !options.fileName) {
        return
      }
      downloading = true
      options.url = options.url.replace('http://', 'https://')
      let fileType = ''
      if (options.fileType) {
        fileType = options.fileType
      } else {
        fileType = options.url.split('.').pop()
      }
      infoModal = Modal.info({
        title: '文件下载',
        okText: '取消下载',
        icon: h('span'),
        content: () => {
          return h('div', { class: 'mt-4' }, [
            h('div', { class: 'fs-16 font-bold' }, ['文件下载过程中请勿关闭当前页面']),
            h('div', { className: 'mt-2' }, [`当前下载进度 ${progress.value}%`])
          ])
        },
        onOk() {
          xhr.abort()
          xhr = null
          return Promise.resolve()
        }
      })
      await downloadBlob(options.url, options.fileName, fileType, true)
      downloading = false
      infoModal && infoModal.destroy()
    } catch (e) {
      console.error(e)
    }
  }

  // 下载文件压缩包zip
  const downloadZip = async (fileList = [], fileName) => {
    let infoModal
    const successCount = ref(0)
    const curDownloadFileName = ref('')
    infoModal = Modal.info({
      title: '文件批量下载',
      okText: '取消下载',
      icon: h('span'),
      width: 580,
      content: () => {
        return h('div', { class: 'mt-4' }, [
          h('div', { class: 'fs-16 font-bold' }, ['文件下载过程中请勿关闭当前页面']),
          h('div', { className: 'mt-2' }, [`总文件数：${fileList.length}，已下载文件数：${successCount.value}`]),
          h('div', { className: 'mt-2 ellipsis' }, [`当前下载文件名：${curDownloadFileName.value}`]),
          h('div', { className: 'mt-2' }, [`当前文件下载进度：${progress.value}%`])
        ])
      },
      onOk() {
        xhr.abort()
        xhr = null
        return Promise.resolve()
      }
    })
    const zip = new JSZip()
    for (let i = 0, len = fileList.length; i < len; i++) {
      const item = fileList[i]
      const fileType = item.fileType ? item.fileType : item.url.split('.').pop()
      curDownloadFileName.value = item.fileName
      const blob = await downloadBlob(item.url)
      zip.file(`${item.fileName}.${fileType}`, blob)
      successCount.value++
    }
    downloading = false
    infoModal && infoModal.destroy()
    zip
      .generateAsync({ type: 'blob' })
      .then((content) => {
        createDownload(content, fileName, 'zip')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return {
    downloadFile,
    downloadZip
  }
}
