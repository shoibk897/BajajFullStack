export function isAlpha(ch) {
  return  /^[A-Za-z]$/.test(ch);
}

export function isNumeric(ch) {
  return /^[0-9]$/.test(ch);
}

export function isSpecialChar(ch) {
  return !isAlpha(ch) && !isNumeric(ch);
}
