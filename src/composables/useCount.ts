export function useCount() {
  const count = ref(0)

  const setCount = () => {
    count.value++
  }

  return {
    count,
    setCount
  }
}
