import elementResizeDetectorMaker from 'element-resize-detector'
import { debounce } from 'lodash-es'
import { ref, onMounted } from 'vue'
/**
 * table组件自适应hooks，用于table高度自适应
 * @param {String} id 表格ID
 */
export default function (id, defaultHeight = 400) {
  const height = ref(defaultHeight)

  const setTableHeight = debounce(
    (element) => {
      const eleHeight = element?.offsetHeight
      // 获取表格container高度
      const tableHeight = eleHeight
      // 40：表格头高度
      const headerHeight = 40
      height.value = tableHeight - headerHeight
    },
    30,
    {
      trailing: true
    }
  )

  const listenHeight = () => {
    const erd = elementResizeDetectorMaker()
    const el = document.getElementById(id)
    erd.listenTo(el, setTableHeight)
  }

  onMounted(listenHeight)

  return {
    height
  }
}
