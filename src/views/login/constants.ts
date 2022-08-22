export interface FormData {
  username: string
  password: string
}

export interface Result {
  formData: FormData
  onReset: () => void
  onSubmit: () => void
}
