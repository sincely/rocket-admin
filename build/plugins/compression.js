import viteCompression from 'vite-plugin-compression'

export default function compressionPlugin() {
  return viteCompression({
    verbose: true, // 默认true
    disable: false, // 默认false
    threshold: 10240, // 默认1025
    algorithm: 'gzip', // 默认gzip
    ext: '.gz' // 默认gz
  })
}
