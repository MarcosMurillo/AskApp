export function getItem(key: string) {
  const data = localStorage.getItem(key)

  return data ? JSON.parse(data) : null
}

export function setItem(key: string, value: string) {
  localStorage.setItem(key, value)
}

export function removeItem(key: string) {
  localStorage.removeItem(key)
}
