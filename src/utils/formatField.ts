export const isPositiveInteger = (event: KeyboardEvent): boolean | void => {
  if (!/[0-9]/.test(event.key) && !(event.key === "Backspace")) event.preventDefault()
}
