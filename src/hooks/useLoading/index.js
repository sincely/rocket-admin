import { ref } from 'vue'

export function useLoading(initValue = false) {
  const loading = ref(initValue)

  const setLoading = (value) => {
    loading.value = value
  }

  const toggle = () => {
    loading.value = !loading.value
  }

  return {
    loading,
    setLoading,
    toggle
  }
}
