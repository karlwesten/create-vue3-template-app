import { ref } from "vue"
import type { FormData, Result } from "./constants"

export function useLogin(): Result {
  const formData = ref<FormData>({
    username: "",
    password: "",
  })

  const onReset = () => {}

  const onSubmit = () => {}

  return {
    formData,
    onReset,
    onSubmit,
  }
}
