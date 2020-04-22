export const isNegativeNumber = (event: KeyboardEvent): boolean | void =>
  /[+\-.,]$/.test(event.key) && event.preventDefault()
